import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
    }
  }

  changeHandler = e => {
    this.setState({ itemName: e.target.value });
  }

  submitForm = e => {
    e.preventDefault();
    this.props.addItem(this.state.itemName);
    this.setState({ itemName: "" });
  }

  render() {
    return(
      <form onSubmit={this.submitForm}>
        <input onChange={this.changeHandler} type="text" name="itemName" value={this.state.itemName}/>
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;