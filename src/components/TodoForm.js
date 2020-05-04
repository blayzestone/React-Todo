import React from 'react';
import { Button, Form, Input } from 'reactstrap';

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
      <Form
        className="col-6"
        onSubmit={this.submitForm}
      >
        <Input 
          onChange={this.changeHandler} 
          type="text" name="itemName" 
          value={this.state.itemName}
          className="m-2"
        />
        <Button color="primary" className="col-5 offset-sm-1">Add Task</Button>
        <Button onClick={this.props.clearCompleted} color="danger" className="col-5 m-1" value="button">Clear Completed</Button>
      </Form>
    );
  }
}

export default TodoForm;