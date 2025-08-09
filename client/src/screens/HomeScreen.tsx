import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
     <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -15.989379,
          longitude: -48.045059,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    },
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