import { ActionReducerMap } from "@ngrx/store";

import { todoKey, TodoState } from '../states/todo.state'
import { _todoReducer } from '../reducers/todo.reducer'

export interface State {
  [todoKey]: TodoState,
}

export const reducers: ActionReducerMap<State> = {
  [todoKey]: _todoReducer,
}
