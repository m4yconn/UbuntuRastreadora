import {View, StyleSheet, Text} from 'react-native'

export default function Footer(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>© 2022 Ubuntu. Todos os direitos reservados. </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '7.5%',
        backgroundColor: "#ff8c00",
        justifyContent: 'center',
        alignItems: 'center'
    },

    text:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
})