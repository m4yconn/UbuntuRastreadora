import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native'


export default function Itemns(){

    return(
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity
                    onPress={() => {
                        console.log('Enter a encomenda')
                    }}
                >
                    <View style={styles.list}>
                        <Text>Encomenda</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.list}>
                        <Text>Encomenda</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.list}>
                        <Text>Encomenda</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.list}>
                        <Text>Encomenda</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.list}>
                        <Text>Encomenda</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.list}>
                        <Text>Encomenda</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.list}>
                        <Text>Encomenda</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.list}>
                        <Text>Encomenda</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.list}>
                        <Text>Encomenda</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.list}>
                        <Text>Encomenda</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '68%',
    },

    list:{
        height: 75,
        justifyContent: 'center',
        alignItems: 'center'
    }
})