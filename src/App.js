import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }

  componentDidMount() {
    this.setState({
      todos: JSON.parse(localStorage.getItem("todos")),
    });
  }
  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newItem] });
  }

  toggleCompleted = id => {
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
    });
  }

  clearCompleted = () => {
    const filteredTodos = this.state.todos.filter(todo => !todo.completed);
    this.setState({
      todos: filteredTodos,
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos}/>
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
