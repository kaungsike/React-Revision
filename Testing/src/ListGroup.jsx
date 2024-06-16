import React from "react";
import EmptyState from "./EmptyState";
import List from "./List";

const ListGroup = (props) => {
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

      {props.tasks.map((task) => (
        <List
          job={task.job}
          checkTask={props.checkTask}
          isDone={task.isDone}
          id={task.id}
          key={task.id}
          deleteTask={props.deleteTask}
          editTask={props.editTask}
        />
      ))}

      <EmptyState />
    </div>
  );
};

export default ListGroup;
