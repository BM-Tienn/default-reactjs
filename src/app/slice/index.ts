import { createSlice } from 'utils/@reduxjs/toolkit';
import { GlobalState } from './types';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { globalSaga } from './saga';
export const initialState: GlobalState = {
  loading: false,
  isLogged: false,
};
const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    loginSuccesses: state => {
      state.isLogged = true;
    },
    clearData: state => {
      state.isLogged = false;
    },
  },
  extraReducers: {},
});
export const { actions: globalActions } = slice;
export const useGlobalSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: globalSaga });
  return { actions: slice.actions };
};
