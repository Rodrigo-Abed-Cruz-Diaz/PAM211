import { Text, StyleSheet, View, FlatList, SectionList } from 'react-native'

export default function FlatListScreen() {
  // FlatList para listas simples
  const ejercicios = [
    {id: '1', nombre: 'Sentadillas', descripcion: 'Ejercicio para fortalecer las piernas y glúteos.'},
    {id: '2', nombre: 'Flexiones', descripcion: 'Ejercicio para fortalecer el pecho y los brazos.'},
    {id: '3', nombre: 'Abdominales', descripcion: 'Ejercicio para fortalecer los músculos abdominales.'},
    {id: '4', nombre: 'Burpees', descripcion: 'Ejercicio cardiovascular que trabaja todo el cuerpo.'},
    {id: '5', nombre: 'Zancadas', descripcion: 'Ejercicio para fortalecer las piernas y glúteos.'},
    {id: '6', nombre: 'Plancha', descripcion: 'Ejercicio isométrico para fortalecer el core.'},
    {id: '7', nombre: 'Saltos de tijera', descripcion: 'Ejercicio cardiovascular para mejorar la resistencia.'},
    {id: '8', nombre: 'Mountain climbers', descripcion: 'Ejercicio para trabajar el core y mejorar la resistencia.'},
    {id: '9', nombre: 'Elevaciones de talones', descripcion: 'Ejercicio para fortalecer los músculos de la pantorrilla.'},
    {id: '10', nombre: 'Superman', descripcion: 'Ejercicio para fortalecer la espalda baja y los glúteos.'},
  ]

  // SectionList para listas con secciones (Agrupar categorias y más interactiva)
  const contactos = [
    {titulo: 'A', data:['Alejandra', 'Ana de las tortillas', 'Adele']},
    {titulo: 'M', data:['Mecánico', 'Mi ex', 'Monica']},
    {titulo: 'T', data:['Tania', 'Tatiana', 'Tere']},
  ]

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.titulo}> Lista de Ejercicios </Text>

        <FlatList
          data={ejercicios}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.listContainer}>
          <Text style={styles.titulo}> Lista de contactos </Text>
          <SectionList
            sections={contactos}
            renderItem={({item}) => (
              <Text style={styles.item}>{item}</Text>
            )}
            renderSectionHeader={({section}) => (
              <Text style={styles.header}>{section.titulo}</Text>
            )}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContainer: {
    flex: 1,
    marginBottom: 20,
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  item: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
  },
  header: {
    fontSize: 18,
    backgroundColor: '#white',
    padding: 10,
    marginTop: 10,
  }
})