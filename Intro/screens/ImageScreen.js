import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ImageBackground, Dimensions} from 'react-native';

const BackgroundImage = require('../assets/splash-icon.png');

export default function ImageScreen({navigation}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash (false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (showSplash) {
    return (
      <ImageBackground
        source={BackgroundImage}
        style={styles.background}
        resizeMode='cover'
      >
        <View style={styles.overlay}>
          <Text style={styles.title}> Bienvenido </Text>
          <Text style={styles.title}> Cargando... </Text>
        </View>  
      </ImageBackground>      
    );
  }
  return (
    <ImageBackground
      source={BackgroundImage}
      style={styles.background}
      resizeMode='cover'
    >
      <View style={styles.mainScreen}>
        <Text style={styles.mainText}> Bienvenido a la pantalla principal.</Text>
    </View>
    </ImageBackground>
  );
}
  const {width, height} = Dimensions.get('window');

  const styles = StyleSheet.create({
    background: {
      width: width,
      height: height,
    },
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      color: '#fff',
      fontSize:32,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    mainScreen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainText: {
      fontSize: 24,
      color: '#333',
    },
  });