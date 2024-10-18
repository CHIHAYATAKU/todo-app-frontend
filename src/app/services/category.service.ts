import { Injectable } from '@angular/core';
import { ToDoCategory } from '../models/todo-category.model';
import { Observable, of } from 'rxjs';
import { mockCategories } from '../mocks/categories.mock';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
  constructor() {}

  getCategories(): Observable<ToDoCategory[]> {
    return of(mockCategories);
  }
}