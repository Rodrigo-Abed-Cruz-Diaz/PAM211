
//1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

//2. Main: Zona de componentes
export default function ContadorScreen() {

    const [contador, setContador] = useState(0);
  
  return (

    <View style={styles.container}>

      <Text style={styles.texto}> Contador: </Text> 
      <Text style={styles.texto2}> {contador} </Text>  

      <View style={styles.botonesContainer}>
      <Button color='red' title='Agregar' onPress={()=>setContador(contador+1)}/>  
      <Button color='blue' title='Quitar' onPress={()=>setContador(contador-1)}/>
      <Button color='orange' title='Reiniciar' onPress={()=>setContador(0)}/>
      </View>  
      <StatusBar style="auto" />

    </View>


  );
}
//3. Estilos: Zona de estetica para componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1c401ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'#300eb5ff',
    fontSize:30,
    fontFamily: 'Time New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  texto2:{
    color:'#f10f0fff',
    fontSize:40,
    fontFamily: 'Courier',
    fontWeight: '900',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  botonesContainer:{
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
  },
});
