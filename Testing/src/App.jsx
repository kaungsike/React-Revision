// import em from "em"
import { useState } from "react";
import Heading from "./Heading";
import ListCreateForm from "./ListCreateForm";
import ListGroup from "./ListGroup";
import Status from "./Status";
import React from "react";

const App = () => {

  const [tasks,setTasks] = useState([
    {
        id : 1,
        job : 'Read Doc',
        isDone : true
    },
    {
        id : 2,
        job : 'Learn React',
        isDone : false,
    },
    {
        id : 3,
        job : 'Train Hard',
        isDone : true
    },
    {
        id : 4,
        job : 'Hello World',
        isDone : false
    }
])


const addTask = (job) => {
  const newTask = {
    id : Date.now(),
    job : job,
    isDone : false
  }
    setTasks([...tasks,newTask])
}

const checkTask = (id) => {
  setTasks(tasks.map((task) => {
  if(task.id === id) {
    task.isDone = !task.isDone;
  }
    return task;
  }
  ))
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => 
    task.id !== id
  ))
}

const editTask = (newJob,id) => {
  setTasks(tasks.map((task) => {
    if(task.id === id ){
      task.job = newJob;
    }
    return task
  }))
}

  return (
    <section
      id="container"
      className="border bg-teal-200 border-teal-400 w-[500px] mx-auto mt-10 p-10"
    >
      <Heading/>


      <ListCreateForm addTask={addTask} tasks={tasks} />

      <Status tasks={tasks}/>

      <ListGroup editTask={editTask} deleteTask={deleteTask} checkTask={checkTask} tasks={tasks} />
      
    </section>
  );
};

export default App;
