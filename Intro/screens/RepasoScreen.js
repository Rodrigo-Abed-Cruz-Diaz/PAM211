import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ImageBackground, Dimensions, Button, Switch, TextInput, Platform, Alert} from 'react-native';

const SplashImage = require('../assets/UPQ-Logo.png');
const ImagenDeFondo = require('../assets/Fondo CR7.jpg');

const {width, height} = Dimensions.get('window');

export default function RepasoScreen({navigation}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [actswitch, setActSwitch] = useState(false);

  const mostrarAlerta = () => {
    if (nombre.trim() === '' && correo.trim() === '' && !actswitch) {
      if (Platform.OS === 'web') {
        window.alert('Error: Por favor ingresa tu nombre, correo y acepta los términos y condiciones');
      } else {
        Alert.alert('Error: Por favor ingresa tu nombre, correo y acepta los términos y condiciones');
      }
    } else if (nombre.trim() === '' && correo.trim() === '') {
      if (Platform.OS === 'web') {
        window.alert('Error: Por favor ingresa tu nombre y correo');
      } else {
        Alert.alert('Error: Por favor ingresa tu nombre y correo');
      }
    } else if (nombre.trim() === '' && !actswitch) {
      if (Platform.OS === 'web') {
        window.alert('Error: Por favor ingresa tu nombre y acepta los términos y condiciones');
      } else {
        Alert.alert('Error: Por favor ingresa tu nombre y acepta los términos y condiciones');
      }
    } else if (correo.trim() === '' && !actswitch) {
      if (Platform.OS === 'web') {
        window.alert('Error: Por favor ingresa tu correo y acepta los términos y condiciones');
      } else {
        Alert.alert('Error: Por favor ingresa tu correo y acepta los términos y condiciones');
      }
    } else if (nombre.trim() === '') {
      if (Platform.OS === 'web') {
        window.alert('Error: Por favor ingresa tu nombre');
      } else {
        Alert.alert('Error: Por favor ingresa tu nombre');
      }
    } else if (correo.trim() === '') {
      if (Platform.OS === 'web') {
        window.alert('Error: Por favor ingresa tu correo');
      } else {
        Alert.alert('Error: Por favor ingresa tu correo');
      }
    } else if (!actswitch) {
      if (Platform.OS === 'web') {
        window.alert('Error: Por favor acepta los términos y condiciones');
      } else {
        Alert.alert('Error: Por favor acepta los términos y condiciones');
      }
    } else if (!correo.includes('@')) {
      if (Platform.OS === 'web') {
        window.alert('Error: El correo necesita tener @');
      } else {
        Alert.alert('Error: El correo necesita tener @');
      }
    } else {
      if (Platform.OS === 'web') {
        window.alert('Registro exitoso');
      } else {
        Alert.alert('Registro exitoso');
      }
    }
  }

  if (showSplash) {
    return (
      <ImageBackground
        source={SplashImage}
        style={styles.background}
        resizeMode='cover'
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.title}>Cargando...</Text>
        </View>  
      </ImageBackground>      
    );
  }

  return (
    <ImageBackground
      source={ImagenDeFondo}
      style={styles.background}
      resizeMode='cover'
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Repaso</Text>
        <TextInput 
          style={styles.recuadro} 
          placeholder='Escribe tu nombre' 
          value={nombre} 
          onChangeText={setNombre} 
          maxLength={50} 
        />

        <TextInput 
          style={styles.recuadro} 
          placeholder='Escribe tu correo' 
          value={correo} 
          onChangeText={setCorreo} 
          maxLength={50} 
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Términos y condiciones:</Text>
          <Switch value={actswitch} onValueChange={setActSwitch}/>
        </View>
        
        <Button color='black' title='Registrarse' onPress={mostrarAlerta}/> 
      </View>
    </ImageBackground>
  );
}

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
    color: '#000000ff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', 
    padding: 20, 
  },
  recuadro: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white', 
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 10,
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 10,
    borderRadius: 5,
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
    color: '#000', 
  }, 
});