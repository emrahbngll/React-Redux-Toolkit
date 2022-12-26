import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeTodo,
  todoCompleted,
} from '../store/feature/login/todo/TodoSlice';

function TodoListComponent() {
  const todoList = useSelector((state) => state.todoReducer.todos);
  const theme = useSelector((state) => state.themeReducer.value);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(removeTodo({ id }));
  };

  return (
    <div style={{ color: theme }}>
      <h1>Todo List Component</h1>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <span>{todo.title}</span>--
            <span>{String(todo.completed)}</span>--
            <button
              onClick={() => {
                onDelete(index);
              }}>
              Delete
            </button>
            <button
              onClick={() => {
                dispatch(todoCompleted(index));
              }}>
              {String(todo.completed) === 'false' ? 'In Progress' : 'Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListComponent;
