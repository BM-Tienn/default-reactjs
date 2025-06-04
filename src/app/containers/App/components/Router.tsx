import { memo, useEffect } from 'react';
import { Switch, Router, Redirect, useLocation } from 'react-router-dom';
import { Dashboard } from 'app/containers/Dashboard/Loadable';
import { Healthcheck } from 'app/containers/Healthcheck/Loadable';
import { Notfound } from 'app/containers/Notfound/Loadable';
import { PrivacyPolicies } from 'app/containers/PrivacyPolicies/Loadable';
import { ProtectedRoute, PublicRoute } from 'app/components/RouteGuard';
import { history } from 'utils/history';
import { tricklingProgress } from 'utils/progressRouter';

const SwitchComponent = Switch as any;
const RedirectComponent = Redirect as any;
const RouterComponent = Router as any;

const Routers = () => {
  let location = useLocation();

  useEffect(() => {
    tricklingProgress.start();
    tricklingProgress.done();
  }, [location.pathname]);

  return (
    <SwitchComponent>
      <ProtectedRoute path={'/dashboard-secure'} component={Dashboard} />
      <PublicRoute path={'/dashboard'} component={Dashboard} />
      <PublicRoute path={'/healthcheck'} component={Healthcheck} />

      <RedirectComponent exact from={`/`} to={`/dashboard`} />

      <PublicRoute path="/404" component={Notfound} />

      <PublicRoute path="/policies" component={PrivacyPolicies} />

      <PublicRoute component={Notfound} />
    </SwitchComponent>
  );
};

export const RouterContainer = memo(() => {
  return (
    <RouterComponent history={history}>
      <Routers />
    </RouterComponent>
  );
});

export default RouterContainer;
