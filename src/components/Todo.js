import React from 'react';

const Todo = ({ todo, toggleCompleted }) => {
  return(
      <p
      onClick={() => toggleCompleted(todo.id)}
      style={{ 
        textDecoration: todo.completed ? "line-through" : "none", 
        cursor: "pointer",
        padding: "0.5rem",
        borderRadius: "5px",
        border: "solid 1px black",
        fontSize: "20px",
      }}
      >
        {todo.task}
      </p>
  );
}

export default Todo;