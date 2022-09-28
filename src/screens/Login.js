import {View, StyleSheet, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from '../../firebase-config';


export default function Login(){
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const navigation = useNavigation()
    const [adm, setAdm] = useState(false)

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log("Conta Logada")
            const user = userCredential.user

            if(adm)
                navigation.navigate('AdmScreen')
            else
                navigation.navigate('ScreenMain')

            console.log(user)
        })
        .catch(error => {
            console.log(error)

            if(error.code === 'auth/invalid-password')
                Alert.alert("Senha inválida")
            if(error.code === 'auth/invalid-email')
                Alert.alert("Email inválido")
            else
                Alert.alert(error)
        })
    }

    return(
        <View style={styles.container}>
            <Animatable.View 
                animation='fadeInLeft'
                delay = {500}
                style={styles.boxTitle}
            >
                <Text style={styles.title}>Bem-Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View
                animation='fadeInUp'
                style={styles.containerForm}
            
            >
                <View style={styles.boxAdm}>
                    <Ionicons name={adm ? "person" : "people"} size={30} color='#ff8c00' />
                    <Text style={styles.textAdm}>{adm ? "ADMINISTRADOR" : "CLIENTE"}</Text>
                    <TouchableOpacity
                        onPress={() => setAdm(!adm)}
                        >
                        <AntDesign name="arrowright" style = {{marginLeft: 25}} size={30} color='#ff8c00' />
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleForm}>
                    Email
                </Text>
                <TextInput
                    onChangeText={(text) => {
                        setEmail(text)
                    }}

                    placeholder='Digite seu email'
                    style={styles.inputTxt}
                />

                <Text style={styles.titleForm}>
                    Senha:
                </Text>
                <TextInput
                    onChangeText={(text) => {
                        setPassword(text)
                    }}

                    secureTextEntry = {true}
                    placeholder = 'Digite sua senha'
                    style={styles.inputTxt}
                />

                <TouchableOpacity
                    style={styles.btn}
                    onPress = {() => {
                        signIn()
                    }}
                >
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
                        Acessar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnCds}
                    onPress = {() => {
                        navigation.navigate('Registre')
                    }}
                >
                    <Text style={styles.btnCdsTxt}>
                        Não possui conta ? Cadastre-se.
                    </Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: '#ff8c00'
    },

    boxTitle:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },

    title:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 28
    },

    containerForm:{
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'

    },

    titleForm:{
        fontSize: 20,
        marginTop: 28
    },

    btn:{
        width: '100%',
        height: '7%',
        backgroundColor: '#ff8c00',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14,
        borderRadius: 4,
    },

    inputTxt:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        color: 'gray'
    },

    btnCds:{
        marginTop: 14
    },

    btnCdsTxt:{
        color: 'gray',
        textAlign: 'center'
    },

    boxAdm:{
        marginTop: 28,
        flexDirection: 'row'
    },

    textAdm:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        color: '#ff8c00',
        width: 180
    }
})