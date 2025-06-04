import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TYPE_LOCAL_STORAGE } from 'utils/constants';
import { auth } from 'utils/helper';
import { history } from 'utils/history';
import { useMobileDetect } from 'utils/hooks/useDetectMobile';
import { setItem } from 'utils/localStorage';
import { LIST_PUBLIC_ROUTE } from './constants';

const RouteComponent = Route as any;
const RedirectComponent = Redirect as any;

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { checkDevice } = useMobileDetect();
  const { path } = rest;
  return (
    <RouteComponent
      {...rest}
      render={props => {
        if (auth()) {
          if (checkDevice().isMobile()) {
            if (path.includes('recommend-use-pc')) {
              return <Component {...props} />;
            }
            return (
              <RedirectComponent
                to={{
                  pathname: '/recommend-use-pc',
                }}
              />
            );
          } else {
            if (path.includes('recommend-use-pc')) {
              return (
                <RedirectComponent
                  to={{
                    pathname: '/',
                  }}
                />
              );
            }
            return <Component {...props} />;
          }
        } else {
          let search = history.location.search;
          let pathname = history.location.pathname;
          if (!LIST_PUBLIC_ROUTE.some(item => pathname.includes(item)))
            setItem(TYPE_LOCAL_STORAGE.URL_REDIRECT, pathname + (search || ''));
          // NOTE: middleware to landing page
          let callbackUrl = '/dashboard';
          // const params = new URLSearchParams(window.location.search);
          // const type = params.get('type');
          // if (type === 'register') callbackUrl = '/account/auth/register';
          return (
            <RedirectComponent
              to={{
                pathname: callbackUrl,
              }}
            />
          );
        }
      }}
    />
  );
};
