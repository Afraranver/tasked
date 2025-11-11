import React, { forwardRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors } from '../constants/theme';

interface TodoInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
}

/**
 * Input field for adding new todos
 */
export const TodoInput = forwardRef<TextInput, TodoInputProps>(
  ({ value, onChangeText, onSubmit }, ref) => {
    return (
      <View style={styles.container}>
        <View style={styles.checkbox} />
        <TextInput
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          placeholder="Task name"
          placeholderTextColor={colors.textPlaceholder}
          style={styles.input}
          onSubmitEditing={onSubmit}
          returnKeyType="done"
          blurOnSubmit={false}
          maxLength={500}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.background,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.checkboxUnchecked,
    backgroundColor: colors.checkboxUnchecked,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.textPrimary,
    padding: 0,
  },
});