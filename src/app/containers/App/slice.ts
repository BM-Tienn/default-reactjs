import { createRoutine } from 'redux-saga-routines';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the App container
export const initialState: ContainerState = {
  loading: false,
  success: false,
  error: false,
};

export const GET_ME = createRoutine('app/getMe');

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetState(state) {
      Object.keys(state).forEach(item => {
        state[item] = initialState[item];
      });
    },
  },
  extraReducers: {},
});

export const { actions, reducer, name: sliceKey } = appSlice;
