import AsyncStorage from '@react-native-async-storage/async-storage';
import { Todo } from '../types/todo';

const STORAGE_KEY = '@todos';

/**
 * AsyncStorage wrapper
 */
export const TodoStorage = {
  /**
   * Load todos 
   */
  async getTodos(): Promise<Todo[]> {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading todos:', error);
      return [];
    }
  },

  /**
   * Save todos 
   */
  async saveTodos(todos: Todo[]): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  },

  /**
   * Clear all todos
   */
  async clearAll(): Promise<void> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing todos:', error);
    }
  },
};