import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { colors } from '../constants/theme';

interface FloatingButtonProps {
  onPress: () => void;
  rotation: Animated.AnimatedInterpolation<string | number>;
}

/**
 * Floating Action Button that rotates from + to ×
 */
export const FloatingButton: React.FC<FloatingButtonProps> = ({
  onPress,
  rotation,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.fab}
      activeOpacity={0.8}
    >
      <Animated.View style={{ transform: [{ rotate: rotation }] }}>
        <Text style={styles.icon}>+</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  icon: {
    fontSize: 32,
    color: colors.checkmarkWhite,
    fontWeight: '300',
  },
});