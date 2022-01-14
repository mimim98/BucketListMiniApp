import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = ({heandleClearAll}) => {
    return (
        <View style={styles.HeaderView}>
            <Text style={styles.HeaderTitle}>Bucket's List</Text>
            <TouchableOpacity style={styles.HeaderButton}
            onPress={heandleClearAll}>
                <FontAwesome5 name='trash' size={25} color='black'></FontAwesome5>
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    HeaderView: {
        paddingVertical: 10,
        marginBottom: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    HeaderTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        letterSpacing: 2,
        fontStyle: 'italic',
    },
    HeaderButton: {
        fontWeight: 'bold',
        color: '#FF9162',
    }
})