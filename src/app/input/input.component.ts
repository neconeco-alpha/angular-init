import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as TodoActions from '../shared/actions/todo.action'
import { TodoCreateDto } from '../shared/models/todo.model';
import { getLoading } from '../shared/selectors/todo.selector'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  form = this.fb.group({
    text: ['', Validators.required],
  })
  loading$ = this.store.select(getLoading)

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
  }

  save() {
    const title: string = this.form.get('text')?.value
    const todo: TodoCreateDto = {
      title
    }
    this.store.dispatch(TodoActions.create({todo}))
  }

}
