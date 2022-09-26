import {View, Text, StyleSheet} from 'react-native'

export default function AdmScreen(){
    return(
        <View style={styles.container}>
            <Text>Tela de administrador</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})