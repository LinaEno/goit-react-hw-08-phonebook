import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userData } from 'redux/auth/authSelectors';

function WithAuthRedirect(Component, navigateTo) {
  const ProtectedComponent = props => {
    const user = useSelector(userData);

    return user !== null ? (
      <Component {...props} />
    ) : (
      <Navigate to={navigateTo} />
    );
  };

  return ProtectedComponent;
}

export default WithAuthRedirect;
