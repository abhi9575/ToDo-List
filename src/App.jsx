import Navbar from "./Components/Navbar/Navbar"
import TodoList from "./Components/TodoList/TodoList"
import "./App.css"
import {closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useState } from "react";

const App = () => {
  let [lists, setLists] = useState([
    { id: 1, title: "Complete React assignment" },
    { id: 2, title: "Go grocery shopping" },
    { id: 3, title: "Prepare for the presentation" },
    { id: 4, title: "Call the bank for account details" },
    { id: 5, title: "Clean the living room" },
  ]);

function addData(task){
  setLists((lists)=>[...lists,{
    id: lists.length + 1,
    title: task,
  }])

}

const sensors = useSensors(
    useSensor(PointerSensor),    
    useSensor(TouchSensor),    //pointer-action:none
    useSensor(KeyboardSensor, { 
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  let getPosition=(id)=> lists.findIndex((list)=> list.id === id);

  function handleDragEnd(event){
    const {active , over} = event;
    if(active.id === over.id) return;
    setLists((lists)=>{
      let oldPosition = getPosition(active.id);
      let newPosition = getPosition(over.id);

      return arrayMove(lists, oldPosition , newPosition)
    })
  }
  
  return (
    <div className="container">
      <Navbar addData={addData}/>
      <DndContext collisionDetection={closestCorners} sensors={sensors} onDragEnd={handleDragEnd}>

      <TodoList lists={lists} />
      </DndContext>
    </div>
  )
}

export default App