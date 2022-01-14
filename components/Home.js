import React, {useState} from 'react'

//components
import Header from "./Header"
import BuckList  from './BuckList'
import InputModal from './InputModal'

const Home = () => {

    //initial list
    const initialBList = [{
        title: "Marvel Collection Figures",
        date: "Fri 08 Jan 2021 16:32:11 GMT",
        key: '1',
    },
    {
        title: "Going to Mekkah",
        date: "Fri 08 Jan 2021 16:32:11 GMT",
        key: '2',
}]

const [bList, setBList] = useState(initialBList);

const heandleClearAll = () => {
    setBList([]);
}

const [modalVisibility, setModalVisibility] = useState(false);
const [toDoInputValue, setToDoInputValue] = useState();

const handleAddToDo = (todo) => {
    const newBList = [...bList, todo];
    setBList(newBList);
    setModalVisibility(false);
}

const [listToBeEdited, setListToBeEdited] = useState(null);
const handleTriggerEdit = (item) => {
    // alert('Edit triggered');
    setListToBeEdited(item);
    setModalVisibility(true);
    setToDoInputValue(item.title);
}

const handleEditList = (editedList) => {
    const newBList = [...bList];
    const listIndex = bList.findIndex((todo) => todo.key === editedList.key)
    newBList.splice(listIndex, 1, editedList)
    setBList(newBList);
    setListToBeEdited(null);
    setModalVisibility(false);
}

    return (
        <>
        <Header heandleClearAll={heandleClearAll}></Header>
        <BuckList 
            bList={bList} 
            setBList={setBList} 
            handleTriggerEdit={handleTriggerEdit}></BuckList>
        {/* <InputModal></InputModal> */}
        <InputModal 
            modalVisibility={modalVisibility} 
            setModalVisibility={setModalVisibility} 
            toDoInputValue={toDoInputValue} 
            setToDoInputValue={setToDoInputValue}
            handleAddToDo={handleAddToDo}
            listToBeEdited={listToBeEdited}
            setListToBeEdited={setListToBeEdited}
            handleEditList={handleEditList}
            bList={bList}>
        </InputModal>
        </>
        
    );
}

export default Home;