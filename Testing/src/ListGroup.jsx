import React from "react";
import EmptyState from "./EmptyState";
import List from "./List";

const ListGroup = () => {

    const tasks = [
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
    ];
  return (
    <div id="listGroup" className="w-full h-full">

    {/* { tasks.map((task) => (
        <div className={` border border-teal-400 p-3 mb-2 ${task.isDone && "bg-teal-100"}`} key={task.id}>
            <p>{task.id}  |  {task.isDone? "Done" : "Not yet!"}</p>
            {task.job}
        </div>
    ))} */}

    {/* <List job="Read DOCs" isDone={true}/>
    <List job="Eat Healthy" isDone={false}/>
    <List job="Keep Going" isDone={false}/>
    <List job={tasks} isDone={true}/> */}

    {
        tasks.map((task) => (
            <List job={task.job} isDone={task.isDone}/>
        ))
    }

    <EmptyState/>

    </div>
  );
};

export default ListGroup;
