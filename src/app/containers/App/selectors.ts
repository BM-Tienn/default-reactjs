import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.app || initialState;

const notification = (state: RootState) => state.notifications || initialState;

export const selectNotifications = createSelector(
  [notification],
  state => state,
);

export const selectIsLoading = createSelector(
  [selectDomain],
  state => state.loading,
);

export const selectIsSuccess = createSelector(
  [selectDomain],
  state => state.success,
);
