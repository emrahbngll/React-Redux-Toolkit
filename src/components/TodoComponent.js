import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/feature/login/todo/TodoSlice';

function TodoComponent() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const todoAdded = () => {
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <div>
      <h1> Todo Component</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}></input>
      <button onClick={todoAdded}>Added Todo</button>
    </div>
  );
}

export default TodoComponent;
