import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as TodoSelectors  from '../shared/selectors/todo.selector'
import * as TodoActions from '../shared/actions/todo.action'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos$ = this.store.select(TodoSelectors.getTodos)

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(TodoActions.loadAll())
  }

  showCreateDialog(): void {
    this.store.dispatch(TodoActions.showDialog())
  }
}
