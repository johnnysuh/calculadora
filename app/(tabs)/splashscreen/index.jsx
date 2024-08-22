import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const styles = StyleSheet.create({
  logo: {
    width: 300,
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
        colors={['#bfc7db', '#0231a1']}
        style={styles.background}

      />
      <Image
        style={styles.logo}
        source={{ uri: 'https://artms-strategy.com/_next/static/media/artms-logo.6b526fa2.png' }} />
    </View>

  )
};


export default SplashScreen;