import { useState } from 'react';
import React from "react";
import Header from "./Header";
import ListCreateForm from "./ListCreateForm";
import ListStatus from "./ListStatus";
import ListGroup from "./ListGroup";
import { flushSync } from 'react-dom';

const App = () => {

  const [tasks,setTasks] = useState([
    {
        id : 1,
        job : "San Gyi Dr Pr Byar",
        isDone : false
    },
    {
        id : 2,
        job : "Move to Thailand",
        isDone : false,
    },
    {
        id : 3,
        job : "Stay Strong",
        isDone : true
    },
    {
        id : 4,
        job : "Wake Up",
        isDone : false
    }
]);

const addTask = (job) => {
  const newTask = {
    id : Date.now(),
    job : job,
    isDone : false
  }
  setTasks([...tasks,newTask])
}

const listCheck = (id) => {
  setTasks(tasks.filter((task) => {
    if(task.id === id){
      task.isDone = !task.isDone;
    }
    return task;
  }))
}

const listDelete = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const editTask = (job,id) => {
  setTasks(tasks.map((task) => {
    if(task.id === id){
      task.job = job
    }
    return task;
  }))
}


  return (
    <section
      id="container"
      className="border bg-teal-200 border-teal-400 w-[500px] mx-auto mt-10 p-10"
    >
      <Header />

      <ListCreateForm addTask={addTask} />

      <ListStatus tasks={tasks} />

      <ListGroup editTask={editTask} listDelete={listDelete} listCheck={listCheck} addTask={addTask} tasks={tasks}/>

    </section>
  );
};

export default App;
