import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as TodoActions from '../actions/todo.action';
import {InputComponent} from '../../input/input.component'
@Injectable()
export class TodoEffects {
  DialogRef?: MatDialogRef<InputComponent>

  constructor(
    private actions$: Actions,
    private dialog: MatDialog
  ){}
  showDialog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodoActions.showDialog),
        tap(() => {
          this.DialogRef = this.dialog.open(InputComponent, {
            width: '400px'
          })
        }),
      ),
    {dispatch: false}
  )
}