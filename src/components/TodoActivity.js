import React from 'react';

const Activity = props => {
  return (
    <div
    onClick={() => props.toggleActivity(props.activity.id)}
    className={`${props.activity.completed ? "completed" : ""}`}>
      <p>{props.activity.name}</p>
    </div>
  );
};

export default Activity;