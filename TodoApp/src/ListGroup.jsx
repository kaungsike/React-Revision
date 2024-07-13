import React from "react";
import EmptyList from "./EmptyList";
import List from "./List";

const ListGroup = () => {

    const tasks = [
        {
            id : 1,
            job : "Read Js Doc",
            isDone : true,
        },
        {
            id : 2,
            job : "React!!",
            isDone : false,
        },
        {
            id : 3,
            job : 'Cool Shower',
            isDone : false
        },
        {
            id : 4,
            job : "I like it",
            isDone : true
        }
    ]

  return (
    <div id="listGroup" className="w-full h-full">
      {tasks.map((task) => 
        <List job={task.job} isDone={task.isDone}/>
      )}
      <EmptyList />
    </div>
  );
};

export default ListGroup;
