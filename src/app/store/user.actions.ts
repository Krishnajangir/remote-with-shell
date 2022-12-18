import { createAction, props } from '@ngrx/store';
import { User } from '../remote/interfaces/User.interface';

export const USER_LOAD = '[User] User Load';
export const USER_LOAD_SUCCESS = '[User] User Load Success';
export const USER_LOAD_FAIL = '[User] User Load Fail';
export const USER_NAME_UPDATE = '[User] User Name Update';

export const USER_LOAD_ACTION = createAction(USER_LOAD);
export const USER_LOAD_SUCCESS_ACTION = createAction(
  USER_LOAD_SUCCESS,
  props<User>()
);
export const USER_LOAD_FAIL_ACTION = createAction(
  USER_LOAD_FAIL,
  props<Error>()
);
export const USER_NAME_UPDATE_ACTION = createAction(
  USER_NAME_UPDATE,
  props<{ firstName: string; lastName: string }>()
);

// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');
