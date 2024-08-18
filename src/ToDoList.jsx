import React, { useState } from 'react'

function ToDoList() {

  const [tasks, setTasks] = useState(["Task 1","Task 2","Task 3"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
      setNewTask(event.target.value);
  }

  function addTask() {

    if(newTask.trim() !=="") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {

    if(index > 0) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]]=
    [updatedTasks[index - 1], updatedTasks[index]];
    setTasks(updatedTasks);
  }
}

  function moveTaskDown(index) {

    if(index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]]=
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    } 
  }

  return (
  <div className='to-do-list'>
    <div className='app-hdr'>
    <img src='img/icons/clipboard.png' />  
    <h1>To-Do-List</h1>
    </div>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange} />
        <button 
          className='add-button'
          onClick={addTask}>
          +
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => 
          <li key={index}>
            <span className="text">{task}</span>            

            <button className="move-button"
              onClick={() => moveTaskUp(index)}>
                <input type="image" src='img/icons/up-arrow.png' />
            </button>
            
            <button className="move-button"
              onClick={() => moveTaskDown(index)}>
                <input type="image" src='img/icons/down-arrow.png' />
            </button>

            <button className="delete-button"
              onClick={() => deleteTask(index)}>
                <input type="image" src='img/icons/trash-red.png' />
            </button>
          </li>
        )}
      </ol>

  </div>
  );


}

export default ToDoList