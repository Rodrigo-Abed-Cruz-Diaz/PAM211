import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from './BotonesScreen';
import TextScreen from './TextScreen';  
import ImageScreen from './ImageScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import ContadorScreen from './ContadorScreen';

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen) {
        case 'contador':
            return <ContadorScreen/> ;
        case 'botones':
            return <BotonesScreen/> ;
        case 'menu':
            default:
            return (
                <View>
                    <Text> Menu de Practicas </Text>
                    <Button onPress={()=>setScreen('contador')} title='Pract: Contador'></Button>
                    <Button onPress={()=>setScreen('botones')} title='Pract: Botones'></Button>
                    <Button onPress={()=>setScreen('text')} title='Pract: Text Input & Alert'></Button>
                    <Button onPress={()=>setScreen('image')} title='Pract: ImageBackground & SlapshScreen'></Button>
                    <Button onPress={()=>setScreen('scroll')} title='Pract: ScrollView'></Button>
                    <Button onPress={()=>setScreen('activity')} title='Pract: ActivityIndicator'></Button>
                    <Button onPress={()=>setScreen('flat')} title='Pract: FlatList y Section List'></Button>
                    <Button onPress={()=>setScreen('modal')} title='Pract: Modal'></Button>
                </View>
            )
    }


}

const styles = StyleSheet.create({})