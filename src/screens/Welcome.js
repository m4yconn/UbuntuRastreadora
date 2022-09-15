import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';


export default function Welcome(){
    const navigation = useNavigation()

    return(
      <View style={styles.container}>
        <Animatable.View 
            animation="zoomIn"
            style={styles.containerImg}>
            <Image
                source={require('../../imgs/logo.png')}
                style = {styles.image}
            />
        </Animatable.View>
        <Animatable.View
            delay={500}
            animation="fadeInUp"
            style={styles.containerMessage}>
            <Text style={styles.textTitle}>Rastreie, organize e acesse suas encomendas!</Text>
            <TouchableOpacity 
                style={styles.btn}
                onPress = {() => {
                    navigation.navigate('Login')
                }}
                >
                <Text style={styles.textBtn}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>
      </View>
    );  
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: '#ff8c00'

    },

    image:{
        height: 220,
        width: 220,
    },

    containerMessage:{
        height: '32%',
        width: '100%',
        marginTop: '45%',
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },

    textTitle:{
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 24,
    },

    containerImg:{
        backgroundColor: 'white',
        marginTop: '33%',
        width: 270,
        height: 270,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100%'
    },
    
    btn:{
        width: '50%',
        height: '20%',
        backgroundColor: '#ff8c00',
        marginHorizontal: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: '18%'
    },

    textBtn:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})