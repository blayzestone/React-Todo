import React from 'react';

const Todo = ({ todo, toggleCompleted }) => {
  return(
      <p
      onClick={() => toggleCompleted(todo.id)}
      style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
      >
        {todo.task}
      </p>
  );
}

export default Todo;