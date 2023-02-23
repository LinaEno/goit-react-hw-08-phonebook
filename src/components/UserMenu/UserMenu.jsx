import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { getUserName } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserName);
  return (
    <div>
      <p>Welcome, {user}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
