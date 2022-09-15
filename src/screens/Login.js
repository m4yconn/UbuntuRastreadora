import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';


export default function Login(){
    const navigation = useNavigation()

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
                <Text style={styles.titleForm}>
                    Email
                </Text>
                <TextInput
                    placeholder='Digite seu email'
                    style={styles.inputTxt}
                />

                <Text style={styles.titleForm}>
                    Senha:
                </Text>
                <TextInput
                    placeholder='Digite sua senha'
                    style={styles.inputTxt}
                />

                <TouchableOpacity
                    style={styles.btn}
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
        height: '5%',
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