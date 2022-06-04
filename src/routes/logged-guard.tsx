import { useAppSelector } from 'app/services/redux/hooks';
import { selectUser } from 'app/services/redux/slices/user-slice';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function LoggedGuard({ children }: { children: JSX.Element }) {
  const user = useAppSelector(selectUser);
  const location = useLocation();

  if (user.id) {
    return <Navigate to="/profile" state={{ from: location }} replace />;
  }

  return children;
}

export default LoggedGuard;
