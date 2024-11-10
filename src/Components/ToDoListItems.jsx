import React from 'react';
import '../App.css'

function ToDoListItems ({ todo, onDelete, onEdit }) {
    const priorityColor = todo.priority === 'Important' ? 'lightgreen' : 'pink';
    return (
        <div className="todo-item" style={{ backgroundColor: priorityColor }}>
        <h3><strong>Title:</strong> {todo.title}</h3>
        <p><strong>Details:</strong> {todo.details}</p>
        <p><strong>Due:</strong> {todo.dueDate}</p>
        <p><strong>Priority:</strong> {todo.priority}</p>
        <button onClick={() => onEdit(todo)}><i class="fa fa-pencil"></i> Edit</button>
        <button onClick={() => onDelete(todo.id)}> <i class="fa fa-trash"></i> Delete</button>
      </div>
    );
  };
  
  export default ToDoListItems;