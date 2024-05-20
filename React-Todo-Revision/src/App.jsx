import React, { useState } from "react";
import Header from "./Header";
import ListCreateForm from "./ListCreateForm";
import ListStatus from "./ListStatus";
import ListGroup from "./ListGroup";

const App = () => {
  const [tasks,setTask] = useState([
    {
        id:1,
        job:"San Gyi Dr",
        isDone:true
    },
    {
        id:2,
        job:"Prepare for interview",
        isDone:false
    },
    {
        id:3,
        job:"Read DOC",
        isDone:false
    },
    {
        id:4,
        job:"Improve your skill",
        isDone:true
    },
]);

const addTask = (job) => {
  const newTask = {
    id : Date.now(),
    job : job,
    isDone : false
  }
  setTask([...tasks,newTask])
}

const checkTask = (id) => {
  setTask(tasks.map((task) => {
    if(id===task.id){
      task.isDone = !task.isDone;
    }
    return task;
  }))
}

const deleteTask = (id) => {
  setTask(tasks.filter((task) => 
    task.id !==id
  ))
}

const editTask = (newJob,id) => {
  setTask(tasks.map((task) => {
    if(task.id==id){
      task.job = newJob;
    }
    return task;
  }))
} 

  return (
    <section
      id="container"
      className="border bg-teal-200 border-teal-400 w-[500px] mx-auto mt-10 p-10"
    >
      <Header/>
      <ListCreateForm addTask={addTask}/>
      <ListStatus tasks={tasks}/>
      <ListGroup editTask={editTask} deleteTask={deleteTask} checkTask={checkTask} tasks={tasks}/>
    </section>
  );
};

export default App;
