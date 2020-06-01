import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './components/Todo.css'

const activities = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      activities: activities,
    };
  }

  addActivity = (activityName) => {
    const newActivity = {
      name: activityName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      activities: [...this.state.activities, newActivity],
    });
  };

  toggleActivity = activityId => {
    this.setState({
      activities: this.state.activities.map(activity => {
        if (activity.id === activityId) {
          return {
            ...activity,
            completed: !activity.completed
          };
        } else {
          return activity;
        }
      })
    });
  };


  clear = () => {
    this.setState({activities: this.state.activities.filter((activity) => !activity.completed)})
  }


  render() {
    return (
      <div>
        <h1>To-do List:</h1>

        <TodoForm addActivity={this.addActivity} />
        <TodoList activities={this.state.activities} toggleActivity={this.toggleActivity} clear={this.clear} />
      </div>
    );
  }
}

export default App;
