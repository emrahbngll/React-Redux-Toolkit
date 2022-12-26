import React from 'react';
import { useDispatch } from 'react-redux';
import { loginAction, logoutAction } from '../store/feature/login/loginSlice';

function LoginComponent() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>LoginComponent</h1>
      <button
        onClick={() => {
          dispatch(loginAction({ name: 'Emrah', surname: 'Bingol' }));
        }}>
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logoutAction());
        }}>
        Logout
      </button>
    </div>
  );
}

export default LoginComponent;
