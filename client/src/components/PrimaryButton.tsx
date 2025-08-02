import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';

interface Props {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'google';
  style?: ViewStyle;
  icon?: React.ReactNode;
}

export const PrimaryButton: React.FC<Props> = ({
  label,
  onPress,
  variant = 'primary',
  style,
  icon,
}) => {
  const isGoogle = variant === 'google';
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: isGoogle ? colors.google : colors.primary }, //(colors.primary -> colors.textDark deixa o botao 2 azul
        style,
      ]}
      activeOpacity={0.85}
      onPress={onPress}
    >
      {icon}
      <Text
        style={[
          styles.label,
          { color: isGoogle ? colors.textDark : colors.textDark }, //colors.textDark-> colors.text do continuar como anonimo texto branco
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '85%',
    paddingVertical: 14,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
});

