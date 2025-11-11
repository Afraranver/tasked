import { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { TodoStorage } from '../utils/storage';
import { Todo } from '../types/todo';

/**
 * Custom hook for managing TODO state and persistence
 */
export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load todos on mount
  useEffect(() => {
    loadTodos();
  }, []);

  // Save todos whenever they change (except on initial load)
  useEffect(() => {
    if (!isLoading) {
      TodoStorage.saveTodos(todos);
    }
  }, [todos, isLoading]);

  const loadTodos = async () => {
    try {
      const loaded = await TodoStorage.getTodos();
      setTodos(loaded);
    } catch (error) {
      Alert.alert('Error', 'Failed to load todos');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Add a new todo
   */
  const addTodo = useCallback((title: string) => {
    if (title.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title: title.trim(),
        isCompleted: false,
      };
      setTodos((prev) => [...prev, newTodo]);
    }
  }, []);

  /**
   * Toggle todo completion
   */
  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }, []);

  /**
   * Update todo title
   */
  const updateTodo = useCallback((id: string, title: string) => {
    if (title.trim()) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, title: title.trim() } : todo
        )
      );
    }
  }, []);

  /**
   * Delete todo with confirmation
   */
  const deleteTodo = useCallback((id: string) => {
    Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          setTodos((prev) => prev.filter((todo) => todo.id !== id));
        },
      },
    ]);
  }, []);

  return {
    todos,
    isLoading,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
  };
};