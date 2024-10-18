import {Routes} from '@angular/router';
import {TodosComponent} from './features/todos/todos.component';
import { HomeComponent } from './features/home/home.component';
import { CategoriesComponent } from './features/categories/categories.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'todos',
    title: 'Todo',
    component: TodosComponent,
  },
  {
    path: 'categories',
    title: 'Categories',
    component: CategoriesComponent,
  },
];
