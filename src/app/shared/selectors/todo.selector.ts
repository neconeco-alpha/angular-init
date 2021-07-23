import { createFeatureSelector, createSelector } from '@ngrx/store'
import { todoKey, TodoState, adapter } from '../states/todo.state'

const getTodoState = createFeatureSelector<TodoState>(todoKey)
const { selectAll, selectEntities } = adapter.getSelectors()

export const getLoading = createSelector(getTodoState, (state) => state.loading)
export const getError = createSelector(getTodoState, (state) => state.error)
export const getSelectedId = createSelector(getTodoState, (state) => state.selectedId)
export const getTodos = createSelector(getTodoState, selectAll)
export const getTodoEntities = createSelector(getTodoState, selectEntities)
