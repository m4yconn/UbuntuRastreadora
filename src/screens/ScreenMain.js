import { View, StyleSheet, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Header from "../components/Header";
import Itemns from "../components/Items";
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-web";
import Footer from "../components/Footer";


export default function ScreenMain(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <Header
                onPress = {() =>{
                    navigation.navigate('Login')
                }}
            />
            <Itemns/>
            <View style={styles.containerBtn}>

                <TouchableOpacity
                    onPress = {() => {
                        console.log('add')
                    }}
                >
                    <Ionicons name="add-circle" size={80} color="#ff8c00" />
                </TouchableOpacity>
            </View>
            <Footer></Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: '#E8E8E8'
    },

    text:{
        color: '#fff'
    },

    containerBtn:{
        flexDirection: 'row-reverse',
        alignItems: 'center',
        paddingRight: 20,
        backgroundColor: 'E8E8E8'
    }
})