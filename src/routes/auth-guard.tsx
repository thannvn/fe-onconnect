import { useAppSelector } from 'app/services/redux/hooks';
import { selectUser } from 'app/services/redux/slices/user-slice';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SlideBarLayout from 'shared/blocks/slide-bar-layout/drawer-layout.component';
import { Role } from 'shared/const/user.const';

function AuthGuard({ children }: { children: JSX.Element }) {
  const user = useAppSelector(selectUser);
  const location = useLocation();

  if (user.id) {
    return user.role === Role.ADMIN ? (
      <SlideBarLayout>{children}</SlideBarLayout>
    ) : (
      children
    );
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AuthGuard;
