import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme/colors';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logonavega2.png')}
        style={styles.logo}
        resizeMode="contain"
        
      />

      <PrimaryButton
        label="Entrar com o Google"
        variant="google"
        icon={<AntDesign name="google" size={20} color={colors.textDark} />}
        onPress={() => console.log('Google Sign‑In')}
        style={{ marginTop: 42 }}
      />

      <PrimaryButton
        label="Continuar como anônimo"
        variant="primary"
        onPress={() => console.log('Login anônimo')}
        style={{ marginTop: 18 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 140,
    marginBottom: 20,
  },
});