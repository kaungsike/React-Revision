import React from "react";
import EmptyState from "./EmptyState";
import List from "./List";

const ListGroup = () => {
    const tasks = [
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
    ]
  return (
    <div id="listGroup" className="w-full h-full">
      {tasks.map((task) => <List key={task.id} isDone={task.isDone} job={task.job}/>)}
      <EmptyState />
    </div>
  );
};

export default ListGroup;
