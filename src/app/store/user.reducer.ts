import { createReducer, on } from '@ngrx/store';
import { User } from '../remote/interfaces/User.interface';
// import { increment, decrement, reset } from './counter.actions';
import * as userAction from './user.actions';

export interface UserState {
  data: User;
  loadSuccess: boolean;
  loadFail: boolean;
}

export const initialState: UserState = {
  data: {} as User,
  loadSuccess: false,
  loadFail: false,
};

export const userReducer = createReducer(
  initialState,
  on(userAction.USER_LOAD_ACTION, (state) => ({ ...state })),
  on(userAction.USER_LOAD_SUCCESS_ACTION, (state, response: User) => ({
    ...state,
    data: response,
    loadSuccess: true,
    loadFail: false,
  })),
  on(userAction.USER_LOAD_FAIL_ACTION, (state, response) => ({
    ...state,
    data: {} as User,
    loadSuccess: false,
    loadFail: true,
  })),
  on(
    userAction.USER_NAME_UPDATE_ACTION,
    (state, response: { firstName: string; lastName: string }) => ({
      ...state,
      data: {
        ...state.data,
        first_name: response.firstName,
        last_name: response.lastName,
      },
    })
  )
);

// export const initialState = 0;

// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state) => state + 1),
//   on(decrement, (state) => state - 1),
//   on(reset, (state) => 0)
// );
