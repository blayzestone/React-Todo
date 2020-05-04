import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleCompleted }) => {
  return(
    <div>
      {todos ?todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted}/>
      )) : <p>Please add a todo...</p>}
    </div>
  );
}

export default TodoList;