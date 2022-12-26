import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../store/feature/login/theme/ThemeSlice';

function ThemeComponent() {
  const [color, setColor] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Theme Component</h1>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(setTheme(color));
        }}>
        Set Color
      </button>
    </div>
  );
}

export default ThemeComponent;
