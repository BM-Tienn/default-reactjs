import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Dashboard container
export const initialState: ContainerState = {};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
});

export const { actions, reducer, name: sliceKey } = dashboardSlice;
