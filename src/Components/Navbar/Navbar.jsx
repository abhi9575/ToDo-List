import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({addData}) => {
  let [newTask, setNewTask] = useState("");
  
  let handleAddTask =()=>{
    if(!newTask) return;

    addData(newTask);
    setNewTask("")
  }

  return (
    <div className={styles.navItems}>
      <h1>ToDo List ✅</h1>
      <div className={styles.navFlex}>
        <label htmlFor="tasked">
      <input type="text" name="tasked" value={newTask} onChange={(e)=>setNewTask(e.target.value)} /></label>
      <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  )
}

export default Navbar