import { createAction, props } from '@ngrx/store'
import { Todo, TodoCreateDto } from '../models/todo.model'

export const loadAll = createAction('[Todo] Load All')
export const loadAllSuccess = createAction('[Todo] Load All Success', props<{todos: Todo[]}>())
export const loadAllFailure = createAction('[Todo] Load All Failure', props<{error: any}>())
export const create = createAction('[Todo] Create', props<{todo: TodoCreateDto}>())
export const showDialog = createAction('[Todo] Show Dialog');
