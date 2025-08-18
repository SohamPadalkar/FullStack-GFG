import { useState } from "react";
import "./App.css";


export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div class="container"style={{ textAlign: "center", marginTop: "50px auto" }}>
      <h1 style={{color: "black"}}>TODO LIST</h1>
      <input 
        type="text"
        placeholder="add item..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>ADD</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>
              Delete  
            </button>
            <button
              onClick={() => {
                const newTask = prompt("Edit task:", t);
                if (newTask) {
                  const updatedTasks = [...tasks];
                  updatedTasks[index] = newTask;
                  setTasks(updatedTasks);
                }
              }}>
              Edit
            </button>  
          </li>
        ))}
      </ul>
    </div>
  );
}
