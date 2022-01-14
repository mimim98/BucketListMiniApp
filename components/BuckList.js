import {Text, StyleSheet, View, TouchableOpacity, TouchableHighlight} from 'react-native'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const BuckList = ({bList, setBList, handleTriggerEdit}) => {

    const handleDeleteList = (rowMap, rowKey) => {
        const newList = [...bList];
        const lIndex = bList.findIndex((todo) => todo.key === rowKey);
        newList.splice(lIndex, 1)
        setBList(newList);
    }

    return (
        <>
        {bList.length == 0 && <Text style={styles.Todotext}>Add a new bucket list, come on!</Text>}
        {bList.length != 0 && 
        <SwipeListView
            data={bList}
            renderItem={(data) => {
                return(
                    <TouchableHighlight style={styles.ListView}
                    underlayColor={'#BAD6EB'}
                    onPress={() => {
                        handleTriggerEdit(data.item)
                    }}>
                        <>
                        <Text style={styles.Todotext}>{data.item.title}</Text>
                        </>
                    </TouchableHighlight>
                )
            }}
            renderHidddenItem={(data, rowMap) => {
                return ( 
                <View style={styles.ListViewHidden}>
                    <TouchableOpacity style={styles.hiddenButton} onPress={() => {handleDeleteList(rowMap, data.item.key)}}>
                    <FontAwesome5 name='trash' size={25} color='black'></FontAwesome5>
                    </TouchableOpacity>
                </View>
            )}}
                leftOpenValue={80}
                previewRowKey={"1"}
                previewOpenValue={80}
                previewOpenDelay={3000}
                disableLeftSwipe={true}
                showsVerticalScrollIndicator={false}
                style={{
                    flex: 1, paddingBottom: 30, marginBottom: 40
                }}>
                
            </SwipeListView>} 
            </>
        );
}

export default BuckList;

const styles = StyleSheet.create({
    ListView: {
        backgroundColor: '#FFFFFF',
        minHeight: 60,
        width: 370,
        padding: 15,
        justifyContent: 'space-around',
        marginBottom: 15,
        borderRadius: 20,
    },
    ListViewHidden: {
        backgroundColor: '#E6E6E6',
        minHeight: 85,
        width: 100,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 15,
        borderRadius: 11,
    },
    hiddenButton: {
        width: 55,
        alignItems: 'center',
    },
    Todotext: {
        fontSize: 16,
        letterSpacing: 1,
        color: "black",
    },
    // Tododate: {
    //     fontSize: 10,
    //     letterSpacing: 1,
    //     color: 'black',
    //     textAlign: 'right',
    //     textTransform: 'uppercase',
    // },
})
