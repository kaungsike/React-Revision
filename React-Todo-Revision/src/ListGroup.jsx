import React from "react";
import EmptyState from "./EmptyState";
import List from "./List";

const ListGroup = (props) => {
  return (
    <div id="listGroup" className="w-full h-full">
      {props.tasks.map((task) => (
        <List
          checkTask={props.checkTask}
          key={task.id}
          isDone={task.isDone}
          id={task.id}
          job={task.job}
          deleteTask={props.deleteTask}
          editTask={props.editTask}
        />
      ))}
      <EmptyState />
    </div>
  );
};

export default ListGroup;
