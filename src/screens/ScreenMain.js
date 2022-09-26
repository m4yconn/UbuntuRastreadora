import { View, StyleSheet, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ScreenMain(){
    return(
        <View style={styles.container}>
            <Text>Tela principal</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})