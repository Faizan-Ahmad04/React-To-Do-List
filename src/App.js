// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ListHeader from './Components/ListHeader';
import ListItems from './Components/ListItems';



function App() {
  const[inpuList, setInputList] = useState("");

  const[items, setItems] = useState([]);

  // const[removeBtnText, setRemovebtnText] = useState("");
  
  const listEvent = (event)=> {
    setInputList(event.target.value);
  }

  const addBtnClicked = ()=> {
      setItems((oldItem) => {
        return [...oldItem, inpuList]
      });

      setInputList("");
      
  };

  const deleteItems = (id)=> {
    console.log("deleted");

    setItems((oldItem)=>{
      return oldItem.filter((arrElem, index)=>{
        return index!== id;
      })
    })
  }
  return (
 <>
 <div id='container'>
  <div className="itemsContainer">
  <ListHeader listEvent = {listEvent}  addBtnClicked = {addBtnClicked} value={inpuList}/>
  {
    items.map((itemval, index)=>{
      return <ListItems input={itemval} btnText = "x" key ={index} id={index} onSelect={deleteItems}/>
    })
  }
  </div>
  </div>
 </>
  );
}

export default App;
