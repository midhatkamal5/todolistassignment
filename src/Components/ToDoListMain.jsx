import React, { useState } from 'react';
import ToDoListItems from './ToDoListItems'
import ToDoListForm from './ToDoListForm'
import '../App.css'



function ToDoListMain() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');


  function openAddTodoForm(){
    setEditTodo(null); 
    setIsModalOpen(true);
  };

  function openEditTodoForm(todo){
    setEditTodo(todo);
    setIsModalOpen(true);
  };

  function saveTodo (todoData){
    if (editTodo) {
      setTodos(todos.map(todo => todo.id === todoData.id ? todoData : todo));
    } else {
      setTodos([...todos, todoData]);
    }
  };

  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  };

  function closeModal(){
    setIsModalOpen(false);
  };
  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }


  return (
    <div className="App">
        <div class="Left">
          <h1><i class="fa fa-sticky-note"></i> My To-Do List App</h1>
          <button onClick={openAddTodoForm}>Add Task</button>
        </div>
        <div class="Center">
        <p><b>Hey there! Here are your tasks:</b></p>
        { <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />}
        <div className="todo-list">
        {todos.length === 0 ? (
          <p>You dont have any pending tasks, please add one.</p>
        ) : (
          todos.map((todo) => (
            <ToDoListItems
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onEdit={openEditTodoForm}
            />
          ))
        )}
      </div>
      </div>
      <div class="Right">
      {isModalOpen && (
        <ToDoListForm
          onSave={saveTodo}
          initialData={editTodo}
          onClose={closeModal}
        />
      )}
      </div>
    </div>    
  );
};

export default ToDoListMain;
