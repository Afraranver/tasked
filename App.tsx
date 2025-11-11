import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Animated,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTodos } from './hooks/useTodos';
import { TodoItem } from './components/TodoItem';
import { TodoInput } from './components/TodoInput';
import { EmptyState } from './components/EmptyState';
import { FloatingButton } from './components/FloatingButton';
import { colors } from './constants/theme';

/**
 * Main App Component
 */
export default function App() {
  const { todos, isLoading, addTodo, toggleTodo, updateTodo, deleteTodo } = useTodos();
  const [inputText, setInputText] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputRef = useRef<any>(null);
  const fabRotation = useRef(new Animated.Value(0)).current;

  // Animate FAB rotation
  useEffect(() => {
    Animated.timing(fabRotation, {
      toValue: isInputVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isInputVisible]);

  const toggleInput = () => {
    if (isInputVisible) {
      setIsInputVisible(false);
      setInputText('');
      Keyboard.dismiss();
    } else {
      setIsInputVisible(true);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleAddTodo = () => {
    if (inputText.trim()) {
      addTodo(inputText);
      setInputText('');
      inputRef.current?.focus();
    }
  };

  const fabRotate = fabRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  if (isLoading) {
    return <View style={styles.container} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>tasked</Text>
      </View>

      {/* Input Field (conditionally rendered) */}
      {isInputVisible && (
        <TodoInput
          ref={inputRef}
          value={inputText}
          onChangeText={setInputText}
          onSubmit={handleAddTodo}
        />
      )}

      {/* Todo List */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={toggleTodo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        )}
        ListEmptyComponent={!isInputVisible ? <EmptyState /> : null}
        contentContainerStyle={
          todos.length === 0 && !isInputVisible ? styles.emptyList : undefined
        }
      />

      {/* Floating Action Button */}
      <FloatingButton onPress={toggleInput} rotation={fabRotate} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  emptyList: {
    flexGrow: 1,
  },
});