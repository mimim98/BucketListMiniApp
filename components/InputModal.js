import React from 'react'
import { Modal, StyleSheet, View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

const InputModal = ({
    modalVisibility, 
    setModalVisibility, 
    toDoInputValue, 
    setToDoInputValue,
    handleAddToDo,
    listToBeEdited,
    setListToBeEdited,
    handleEditList,
    bList}) => {

        const handleCloseModal = () => {
            setModalVisibility(false);
            setToDoInputValue("");
            setListToBeEdited(null);
        }
    
        const handleSubmit = () => {
        if (!listToBeEdited) {
            handleAddToDo({
                title: toDoInputValue,
                key: `${(bList)[bList.length-1] && parseInt(bList[bList.length-1].key)}`
            });
        } else {
            handleEditList({
                title: toDoInputValue,
                key: listToBeEdited.key
            })
        }

        setToDoInputValue("");
    }

    return (
        <>
        <TouchableOpacity  style={styles.ModalButton} onPress={() => {setModalVisibility(true)}}>
            <AntDesign name = "plus" size={30} color="black"></AntDesign>
        </TouchableOpacity>

        <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisibility}
        onRequestClose={handleCloseModal}>

            <View style={styles.ModalContainer}>
                <View style={styles.ModalView}>
                <View style={styles.ModalIcon}>
                    <Text style={styles.HeaderTitle}>My Bucket List</Text>
                    <AntDesign name="edit" size ={40} color="black"></AntDesign>
                </View>

                <TextInput style={styles.StyledInput}
                placeholder= "Add a list"
                placeholderTextColor={"black"}
                selectionColor={"white"}
                autoFocus={true}
                onChangeText={(text) => setToDoInputValue(text)}
                value={toDoInputValue}
                onSubmitEditing={handleSubmit}>
                </TextInput>

                <View style={styles.ModalActionGroup}>
                    <TouchableOpacity style={styles.ModalAction} color={'black'} onPress={handleCloseModal(true)}>
                        <AntDesign name="close" size ={40} color="black"></AntDesign>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ModalAction} color={'black'} onPress={handleSubmit(true)}>
                        <AntDesign name="check" size ={40} color="black"></AntDesign>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </Modal>
        </>
    );
}

export default InputModal;

const styles = StyleSheet.create ({
    ModalButton: {
        width: 60,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        bottom: 15,
    },
    ModalContainer: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#332424',
    },
    ModalIcon: {
        alignItems: 'center',
        marginBottom: 30,
    },
    StyledInput: {
        width: 300,
        height: 50,
        backgroundColor: '#E6E6E6',
        padding: 10,
        fontSize: 16,
        borderRadius: 10,
        color: '#4D3636',
        letterSpacing: 1,
    },
    ModalAction: {
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    ModalActionGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    ModalView: {
        backgroundColor: '#4D3636',
        borderRadius: 20,
        padding: 35,
    },
    HeaderTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#E6E6E6',
        letterSpacing: 2,
        fontStyle: 'italic',
    },
})