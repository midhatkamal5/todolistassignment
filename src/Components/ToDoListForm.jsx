import React, { useState } from 'react';
import '../App.css'


function ToDoListForm ({ onSave, initialData, onClose }){
  const [title, setTitle] = useState(initialData?.title || '');
  const [details, setDetails] = useState(initialData?.details || '');
  const [dueDate, setDueDate] = useState(initialData?.dueDate || '');
  const [priority, setPriority] = useState(initialData?.priority || '');


  function handleSubmit(e){
    if (title && details && dueDate && priority) {
      onSave({ title, details, dueDate,priority, id: initialData?.id || Date.now() });
      onClose();
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>{initialData ? 'Edit your task' : 'Add your task'}</h2>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Details:
          <input
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <label>
          Priority:
          <input
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </label>
        
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default ToDoListForm;