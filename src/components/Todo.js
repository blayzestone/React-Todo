import React from 'react';

const Todo = ({ todo }) => {
  return(
      <p
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.task}
      </p>
  );
}

export default Todo;