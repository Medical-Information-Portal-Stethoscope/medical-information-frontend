import { FC, ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'services/app/hooks';
import {
  isUserAuthChecked,
  showUserPersonalData,
} from 'services/features/user/selectors';
import routes from 'utils/routes';

interface IWithProtectedRouteProps {
  component: ReactElement;
  onlyUnAuth?: boolean;
}

interface IOnlyUnAuthProps {
  component: ReactElement;
}

const WithProtectedRoute: FC<IWithProtectedRouteProps> = ({
  component,
  onlyUnAuth = false,
}) => {
  const isAuthChecked = useAppSelector(isUserAuthChecked);
  const { user } = useAppSelector(showUserPersonalData);
  const location = useLocation();

  const { from } = location.state || { from: { pathname: routes.home } };

  const isRouteEmailActivation = location.pathname.endsWith(
    routes.signupActivation
  );

  let hasEmailActivation = localStorage.getItem('hasEmailActivation');

  if (hasEmailActivation) {
    hasEmailActivation = JSON.parse(hasEmailActivation);
  }

  const isRouteResetPasswordConfirmation = location.pathname.endsWith(
    routes.password.resetConfirmation
  );

  let hasResetPasswordActivation = localStorage.getItem(
    'hasResetPasswordActivation'
  );

  if (hasResetPasswordActivation) {
    hasResetPasswordActivation = JSON.parse(hasResetPasswordActivation);
  }

  if (!isAuthChecked) return null;

  if (onlyUnAuth && user) {
    return <Navigate to={from} />;
  }

  if (onlyUnAuth && !user && isRouteEmailActivation && !hasEmailActivation) {
    return <Navigate to={routes.signup} />;
  }

  if (
    onlyUnAuth &&
    !user &&
    isRouteResetPasswordConfirmation &&
    !hasResetPasswordActivation
  ) {
    return <Navigate to={routes.password.reset} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to={routes.signin} state={{ from: location }} />;
  }

  return component;
};

export function OnlyUnAuth({ component }: IOnlyUnAuthProps) {
  return <WithProtectedRoute onlyUnAuth component={component} />;
}

export const OnlyAuth = WithProtectedRoute;
