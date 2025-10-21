import { Text, View, StyleSheet, Button, Alert, TextInput, Platform } from 'react-native'
import React, {useState} from 'react'


export default function TextScreen() {
  const [nombre, setNombre]=useState('');
  const [contrasenia, setContrasenia]=useState('');
  const [comentarios, setComentarios]=useState('');
  const mostrarAlerta = () => {
  if(nombre.trim()=== '' || contrasenia.trim()=== '' || comentarios.trim()=== '') {
    if(Platform.OS === 'web') {
      window.alert('Error: Por favor ingresa un nombre, contraseña y comentarios');
  } else {
    Alert.alert('Error: Por favor ingresa un nombre, contraseña y comentarios');
  }}else {
    if(Platform.OS === 'web') {
      window.alert(`Hola, ${nombre}`);
    } else {
      Alert.alert(`Hola, ${nombre}`);
    }
  }}
  return (
      <View style={styles.container}>
        <Text style={styles.titulo}> TextScreen </Text>
        <TextInput
        style={styles.recuadro}
          placeholder='Escribe tu nombre'
          value={nombre}
          onChangeText={setNombre}
          maxLength={50}
        />
        <TextInput
        style={styles.recuadro}
          placeholder='Escribe tu contraseña'
          value={contrasenia}
          onChangeText={setContrasenia}
          secureTextEntry={true}
          maxLength={20}
          keyboardType='numeric'
        />
        <TextInput
        style={styles.recuadro}
          placeholder='Escribe tus comentarios'
          value={comentarios}
          onChangeText={setComentarios}
          multiline={true}
          numberOfLines={4}
          maxLength={200}
        />
        <Button color='blue' title='Mostrar nombre' onPress={mostrarAlerta}/> 
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddding: 20,
  },
  titulo:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  recuadro:{
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
  }
});