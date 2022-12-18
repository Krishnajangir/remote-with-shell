import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { User } from '../remote/interfaces/User.interface';
import { UserService } from '../remote/services/user.service';
import * as userActions from './user.actions';

@Injectable()
export class UserEffects {
  loadUser = createEffect(() =>
    this.action$.pipe(
      ofType(userActions.USER_LOAD),
      mergeMap(() =>
        this.userService.getUser().pipe(
          map((response: User) =>
            userActions.USER_LOAD_SUCCESS_ACTION(response)
          ),
          catchError((error: Error) =>
            of(userActions.USER_LOAD_FAIL_ACTION(error))
          )
        )
      )
    )
  );

  constructor(private action$: Actions, private userService: UserService) {}
}
