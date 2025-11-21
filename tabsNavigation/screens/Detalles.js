import { View, Text, StyleSheet } from 'react-native';

export default function Detalles({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.textoUno}>Detalles de Usuario</Text>
            <Text style={styles.textoDos}>Usando Navegación Stack.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textoUno: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textoDos: {
        fontSize: 16,
        color: 'gray',
    },
});