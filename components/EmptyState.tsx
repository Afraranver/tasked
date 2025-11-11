import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/theme';

/**
 * Empty state shown when there are no todos
 */
export const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No tasks yet</Text>
      <Text style={styles.subtext}>Tap the + button to add one</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  text: {
    fontSize: 18,
    color: colors.textMuted,
    fontWeight: '500',
  },
  subtext: {
    fontSize: 14,
    color: colors.textLight,
    marginTop: 8,
  },
});