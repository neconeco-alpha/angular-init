import { createReducer, on } from "@ngrx/store";
import { adapter, initailState } from "../states/todo.state"
import * as Actions from '../actions/todo.action'
import { Todo } from '../models/todo.model'

export const _todoReducer = createReducer(
  initailState,
  on(Actions.loadAll, (state) => ({ ...state, loading: false })),
  on(Actions.loadAllSuccess, (state, { todos }) =>
    adapter.setAll(todos, { ...state, loading: false })
  ),
  on(Actions.loadAllFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error
  })),
  on(Actions.create, (state, {todo}) => {
    let dto: Todo = {
      id: `${state.ids.length + 1}`,
      text: todo.title
    }
    return adapter.addOne(dto, {...state})
  })
)
