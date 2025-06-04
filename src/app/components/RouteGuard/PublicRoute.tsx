import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TYPE_LOCAL_STORAGE } from 'utils/constants';
import { auth } from 'utils/helper';
import { getItem, removeItem } from 'utils/localStorage';

const RouteComponent = Route as any;
const RedirectComponent = Redirect as any;

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <RouteComponent
      {...rest}
      render={props => {
        if (!auth()) {
          return <Component {...props} />;
        } else {
          const url_redirect = getItem(TYPE_LOCAL_STORAGE.URL_REDIRECT);
          removeItem(TYPE_LOCAL_STORAGE.URL_REDIRECT);
          const [pathname, search] = (url_redirect || '/').split('?');
          return (
            <RedirectComponent
              to={{
                pathname: pathname || '/',
                search: search ? `?${search}` : '',
              }}
            />
          );
        }
      }}
    />
  );
};
