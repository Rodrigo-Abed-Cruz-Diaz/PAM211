import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'


export default function ScrollViewScreen() {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollArea} 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={true}>

        <Text style={styles.title}> Cuentos Cortos </Text>
        <Text style={styles.subtitleRed}> La máquina del tiempo </Text>
        <Text style={styles.text}>
          Construyó una máquina del tiempo para regresar al pasado.
          Al encenderla, se dio cuenta de que había olvidado programar el destino.
        </Text>
        <Text style={styles.subtitleRed}> El último hombre </Text>
        <Text style={styles.text}>
          Cuando por fin apagó todas las pantallas, el silencio fue tan absoluto
          que por primera vez en años, se escuchó a sí mismo pensar.
        </Text>
        <Text style={styles.subtitleRed}> El coleccionista </Text>
        <Text style={styles.text}> 
          Atrapó estrellas en un frasco de vidrio.
          Una noche, al abrirlo para admirarlas, la habitación se llenó de oscuridad. 
        </Text>
        <Text style={styles.subtitleRed}> La decisión de María </Text>
        <Text style={styles.text}>
          María compró las semillas en un sobre amarillo. Años después, 
          el hombre que amaba yacía a la sombra de un árbol que no existía.
        </Text>
        <Text style={styles.subtitleRed}> Herencia </Text>
        <Text style={styles.text}>
          Mi abuelo me dejó su reloj de bolsillo. La primera vez que lo abrí,
          en lugar de mecanismos, encontré todo el tiempo que me había robado.
        </Text>
        <Text style={styles.subtitleRed}> Ecos </Text>
        <Text style={styles.text}>
          La niña que fue solía susurrarle desde los espejos antiguos.
          Un día, ella, la mujer de ahora, por fin le respondió.
        </Text>
        <Text style={styles.subtitleRed}> Instrucciones para un final </Text>
        <Text style={styles.text}>
          El día que su corazón dejó de latir, las rosas del jardín, una por una, 
          cerraron sus pétalos y se convirtieron en capullos de nuevo.
        </Text>
        
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollArea: {
    flex: 1,
  },
  item: {
    backgroundColor: '#c9a0ff',
    color: '#FFF',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    textAlign: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitleRed: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlingn: 'center',
    backgroundColor: '#FF0000',
    borderRadius: 10,
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: '95%',
    alingSelf: 'center',
  },
  textRed: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
    textAlingn: 'justify',
    marginBottom: 15,
    padding: 10,
    backgrounfColor: '#FF0000',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFFF',
    lineHeight: 24,
    textAlingn: 'justify',
    marginBottom: 15,
    padding: 10,
  },
})
