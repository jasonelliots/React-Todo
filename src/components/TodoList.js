// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import TodoActivity from "./TodoActivity";

const TodoList = (props) => {
  return (
    <div className="TodoList">
      {props.activities.map((activity) => (
        <TodoActivity
          key={activity.id}
          activity={activity}
          toggleActivity={props.toggleActivity}
        />
      ))}
      {/* <button onClick={props.activities.filter((activity) => activity.completed? true: false)}>Clear Completed!</button> */}
      <button onClick={props.clear}>Clear Completed!</button>

    </div>
  );
};

export default TodoList;
