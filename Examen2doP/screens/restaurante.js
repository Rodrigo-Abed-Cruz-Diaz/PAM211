import { Text, StyleSheet, View, ImageBackground, ScrollView, Button, Alert, SafeAreaView } from 'react-native'

const imagenFondo = require('../assets/imagenpizza.jpeg');
const pizza1 = require('../assets/pizzamargarita.jpeg');
const pizza2 = require('../assets/pizzapepperoni.jpeg');
const bebida1 = require('../assets/vinotinto.jpeg');
const bebida2 = require('../assets/cervezadebarril.jpeg');

const pizzas = [
    { nombre: 'Pizza Margarita' , descripcion: 'Pizza tradicional con tomate fresco y albahaca', precio: '$300', imagen : pizza1},
    { nombre: 'Pizza Pepperoni' , descripcion: 'Pizza con pepperoni y queso extra', precio: '$350', imagen : pizza2},
];

const bebidas = [
    { nombre: 'Vino tinto' , descripcion: 'Copa de vino tinto de la casa', precio: '$150', imagen : bebida1},
    { nombre: 'Cerveza de barril' , descripcion: 'Cerveza artesanal servida del barril', precio: '$100', imagen : bebida2},
];

const mostrarAlerta = (mensaje) => {
    window.alert(mensaje);
}

export default function Restaurante() {
    return (
        <ImageBackground source={imagenFondo} style={styles.imagebackground} imageStyle={styles.imageStyle}>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator>
                    <View style={styles.header}>
                        <Text style={styles.titulo}>Restaurante Rodrigo's Pizza</Text>
                        <Text style={styles.subtitulo}>Restaurante de pizzas de especialidad italiana</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.seccionTitulo}>Menú de pizzas de especialidad:</Text>
                        {pizzas.map((pizza, index) => (
                            <View key={index} style={styles.itemContainer}>
                                <ImageBackground source={pizza.imagen} style={{ width: '100%', height: 150, marginBottom: 8 }} /> 
                                <Text style={styles.texto}>Nombre: {pizza.nombre}</Text>
                                <Text style={styles.texto}>Descripción: {pizza.descripcion}</Text>
                                <Text style={styles.texto}>Precio: {pizza.precio}</Text>
                                <Button
                                    title="Ordenar"
                                    onPress={() => mostrarAlerta(`Seguro que quieres odenar lo siguinete: ${pizza.nombre} — ${pizza.precio}`)}
                                />
                            </View>
                        ))}

                        <Text style={styles.seccionTitulo}>Menú de bebidas:</Text>
                        {bebidas.map((bebida, index) => (
                            <View key={index} style={styles.itemContainer}>
                                <ImageBackground source={bebida.imagen} style={{ width: '100%', height: 150, marginBottom: 8 }} />
                                <Text style={styles.texto}>Nombre: {bebida.nombre}</Text>
                                <Text style={styles.texto}>Descripción: {bebida.descripcion}</Text>
                                <Text style={styles.texto}>Precio: {bebida.precio}</Text>
                                <Button
                                    title="Ordenar"
                                    onPress={() => mostrarAlerta(`Seguro que quieres ordenar lo siguiente: ${bebida.nombre} — ${bebida.precio}`)}
                                />
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    imagebackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    imageStyle: {
        resizeMode: 'cover',
    },
    scrollContainer: {
        padding: 16,
    },
    header: {
        backgroundColor: 'rgba(248,180,0,0.9)',
        padding: 16,
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 12,
    },
    titulo: { fontSize: 18, fontWeight: '700' },
    subtitulo: { fontSize: 14, marginTop: 4 },
    container: {
        width: '100%',
        backgroundColor: 'transparent',
    },
    seccionTitulo: {
        fontSize: 16,
        marginTop: 8,
        marginBottom: 6,
        color: '#fff',
        textShadowColor: 'rgba(0,0,0,0.6)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    itemContainer: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        padding: 12,
        marginVertical: 8,
        borderRadius: 6,
    },
    texto: {
        fontSize: 16,
        marginBottom: 6,
    },
})