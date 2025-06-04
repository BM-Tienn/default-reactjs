import { DashboardState } from 'app/containers/Dashboard/types';
import { AppState } from 'app/containers/App/types';
/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life.
  So, not available always
*/
export interface RootState {
  notifications: any;
  dashboard?: DashboardState;
  app?: AppState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
