import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToDo } from '../models/todo.model';
import { mockTodos } from '../mocks/todos.mock';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  
  constructor() {}

  // 全件取得メソッド
  getTodos(): Observable<ToDo[]> {
    return of(mockTodos);
  }
}
