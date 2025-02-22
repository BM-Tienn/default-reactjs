// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
import { GlobalState } from 'app/slice/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  global: GlobalState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
