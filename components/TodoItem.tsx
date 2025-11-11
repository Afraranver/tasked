import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { colors } from '../constants/theme';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
  onDelete: (id: string) => void;
}

/**
 * Individual todo item with toggle, edit, and delete
 */
export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onUpdate,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);
  const editInputRef = useRef<TextInput>(null);

  const startEditing = () => {
    setIsEditing(true);
    setEditText(todo.title);
    setTimeout(() => editInputRef.current?.focus(), 100);
  };

  const saveEdit = () => {
    if (editText.trim()) {
      onUpdate(todo.id, editText);
    }
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      {/* Checkbox */}
      <TouchableOpacity
        onPress={() => onToggle(todo.id)}
        style={[
          styles.checkbox,
          todo.isCompleted && styles.checkboxChecked,
        ]}
      >
        {todo.isCompleted && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>

      {/* Text or Edit Input */}
      {isEditing ? (
        <View style={styles.editContainer}>
          <TextInput
            ref={editInputRef}
            value={editText}
            onChangeText={setEditText}
            style={styles.editInput}
            onSubmitEditing={saveEdit}
            onBlur={saveEdit}
            autoFocus
            maxLength={500}
          />
        </View>
      ) : (
        <TouchableOpacity
          onLongPress={startEditing}
          delayLongPress={500}
          style={styles.textContainer}
        >
          <Text
            style={[
              styles.text,
              todo.isCompleted && styles.textCompleted,
            ]}
          >
            {todo.title}
          </Text>
        </TouchableOpacity>
      )}

      {/* Delete Button */}
      {!isEditing && (
        <TouchableOpacity
          onPress={() => onDelete(todo.id)}
          style={styles.deleteButton}
        >
          <Text style={styles.deleteIcon}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.checkboxUnchecked,
    backgroundColor: colors.checkboxUnchecked,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.checkboxChecked,
    borderColor: colors.checkboxChecked,
  },
  checkmark: {
    color: colors.checkmarkWhite,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: colors.textMuted,
  },
  editContainer: {
    flex: 1,
    marginRight: 12,
  },
  editInput: {
    fontSize: 16,
    color: colors.textPrimary,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.checkboxChecked,
    borderRadius: 4,
    backgroundColor: colors.backgroundSecondary,
  },
  deleteButton: {
    padding: 4,
  },
  deleteIcon: {
    fontSize: 20,
    color: colors.textMuted,
    fontWeight: '400',
  },
});