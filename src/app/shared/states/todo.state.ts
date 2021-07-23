import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { Todo } from "../models/todo.model";


export const todoKey = 'todo'

export interface TodoState extends EntityState<Todo> {
  loading: boolean
  selectedId?: string
  error?: any
}

export const adapter = createEntityAdapter<Todo>()
export const initailState: TodoState = adapter.getInitialState({
  loading: false
})
