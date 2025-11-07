import { Text, StyleSheet, View, ImageBackground, ScrollView, Button, Alert} from 'react-native'
import React, { Component } from 'react'

const imagenFondo = require('../assets/imagenpizza.jpeg');
const pizza1 = require('../assets/pizzamargarita.jpeg');
const pizza2 = require('../assets/pizzapepperoni.jpeg');
const bebida1 = require('../assets/vinotinto.jpeg');
const bebida2 = require('../assets/cervezadebarril.jpeg');

const pizzas = [
    { nombre: 'Pizza Margarita' , descripcion: 'Pizza tradicional con tomate fresco y albaca', precio: '$300', imagen : pizza1},
    { nombre: 'Pizza Pepperoni' , descripcion: 'Pizza con pepperoni y queso extra', precio: '$350', imagen : pizza2},
];

const bebidas = [
    { nombre: 'Vino tinto' , descripcion: 'Copa de vino tinto de la casa', precio: '$150', imagen : bebida1},
    { nombre: 'Cerveza de barril' , descripcion: 'Cerveza artesanal servida del barril', precio: '$100', imagen : bebida2},
];

const mostrarAlerta = (mensaje) => {
    alert(mensaje);
}


export default function restaurante() {
    return (
    <ImageBackground source={imagenFondo}>
      <View>
        <Text> Restaurante Rodrigo's Pizza</Text>
        <Text> Restaurante de pizzas de especialidad italiana </Text>
      </View>
        <View>  
        <ScrollView showsVerticalScrollIndicator={true}>

        <Text> Menu de pizzas de especialidad: </Text>
        {pizzas.map((pizza, index) => (
            <View key={index}>
                <Text> Nombre: {pizza.nombre} </Text>
                <Text> Descripcion: {pizza.descripcion} </Text>
                <Text> Precio: {pizza.precio} </Text>
                <Button
                    title="Ordenar"
                    onPress={() => mostrarAlerta(`Has ordenado: ${pizza.nombre} con un precio de ${pizza.precio}`)}
                />
            </View>
        ))}

        <Text> Menu de bebidas: </Text>
        {bebidas.map((bebida, index) => (
            <View key={index}>
                <Text> Nombre: {bebida.nombre} </Text>
                <Text> Descripcion: {bebida.descripcion} </Text>
                <Text> Precio: {bebida.precio} </Text>
                <Button
                    title="Ordenar"
                    onPress={() => mostrarAlerta(`Has ordenado: ${bebida.nombre} con un precio de ${bebida.precio}`)}
                />
            </View>
        ))}
        </ScrollView>
      </View>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({})