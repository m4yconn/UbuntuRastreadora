import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 



export default function Header(props){
    return(
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image
                    source={require('../../imgs/logo.png')}
                    style = {styles.img}
                />
            </View>
            <TouchableOpacity 
                style={styles.containerBtn}
                onPress = {props.onPress}
            >
                <Ionicons name="ios-exit-outline" size={40} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ff8c00',
        height: '13%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    img:{
        width: 70,
        height: 70
    },

    containerImg:{
        backgroundColor: 'white',
        width: 80,
        height: 80,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100%'
    },

    containerBtn:{
        marginRight: 20
    }
})