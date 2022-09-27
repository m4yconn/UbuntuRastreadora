import {View, Text, StyleSheet} from 'react-native'
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function AdmScreen(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <Header
                onPress = {() =>{
                    navigation.navigate('Login')
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '100%'
    }
})