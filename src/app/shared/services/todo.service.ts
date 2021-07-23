import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Todo } from '../models/todo.model'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient)  {}

  findAll() {
    const url = ''
    let params = new HttpParams()

    return this.http.get<Todo[]>(url, {params})
  }
}
