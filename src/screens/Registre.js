import {View, StyleSheet, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import { useState } from 'react';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from '../../firebase-config';

export default function Registre(props){

    const [userName, setUserName] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const navigation = useNavigation()

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {

            Alert.alert("Conta criada")
            navigation.navigate("Login")
            console.log("Conta criada")
            const user = userCredential.user
            console.log(user)


        })
        .catch(error => {
            console.log(error)
            Alert.alert("Houve um error")

            if(error.code === 'auth/email-already-in-use')
                Alert.alert("Email já existe")

        })
    }

    return(
        <View style={styles.container}>
            <Animatable.View 
                animation="fadeInLeft"
                delay={500}
                style={styles.boxTitle}
            >
                <Text style={styles.title}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View
                animation="fadeInUp"
                style={styles.containerForm}
            
            >
                <Text style={styles.titleForm}>
                    Nome
                </Text>
                <TextInput
                    onChangeText={text => {
                        setName(text)
                    }}
                    placeholder='Digite seu Nome'
                    style={styles.inputTxt}
                />

                <Text style={styles.titleForm}>
                    Nome de Usuário
                </Text>
                <TextInput
                    onChangeText={text => {
                        setUserName(text)
                    }}
                    placeholder='Digite seu nome de usuário'
                    style={styles.inputTxt}
                />

                <Text style={styles.titleForm}>
                    Email
                </Text>
                <TextInput
                    onChangeText={text => {
                        setEmail(text)
                    }}
                    placeholder='Digite seu email'
                    style={styles.inputTxt}
                />

                <Text style={styles.titleForm}>
                    Senha
                </Text>
                <TextInput
                    onChangeText={text => {
                        setPassword(text)
                    }}
                    placeholder='Digite sua senha'
                    secureTextEntry = {true}
                    style={styles.inputTxt}
                />
                
                <TouchableOpacity
                    style={styles.btn}
                    onPress = {() => {
                        if(name.length < 8|| userName.length < 8){
                            Alert.alert("Nome e nome de usuário precisam ter pelo menos 8 caracteres")
                            console.log("Nome e nome de usuário precisam ter pelo menos 8 caracteres")
                        }
                        else
                            createUser()
                    }}
                >
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnCds}
                    onPress = {() => {
                        navigation.navigate('Login')
                    }}
                >
                    <Text style={styles.btnCdsTxt}>
                        Já possui conta ? Faça login.
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
        height: '8%',
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
    }
})