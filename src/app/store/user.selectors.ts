import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const featureSelectorUser = createFeatureSelector<UserState>('user');

export const userProfile = createSelector(
  featureSelectorUser,
  (state) => state.data || {}
);
export const userFirstName = createSelector(
  featureSelectorUser,
  (state) => state.data.first_name || ''
);
