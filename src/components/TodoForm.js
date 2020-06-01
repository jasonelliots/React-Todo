import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      activity: "",
    };
    
  }

  handleChange = evt => {
      this.setState ({
          activity: evt.target.value
      })
  }

  handleSubmit = evt => {
      evt.preventDefault()
      this.props.addActivity(this.state.activity)
      this.setState ({
      activity: "", 
    })
  }

  

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <input type="text" name ="activity" value={this.state.activity} onChange={this.handleChange}/>
        <button>Add</button>
    </form>
    )
  }
  
}

export default TodoForm;
