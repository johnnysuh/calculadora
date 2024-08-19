import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const styles = StyleSheet.create({
  logo: {
    width: 185,
    height: 100,
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});

const SplashScreen = function () {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#050627', '#1f469a']}
        style={styles.background}

      />
      <Image
        style={styles.logo}
        source={{ uri: 'wekimeki.png' }} />
    </View>

  )
};


export default SplashScreen;