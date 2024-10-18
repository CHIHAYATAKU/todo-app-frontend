import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterOutlet, TodoItemsComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  title = `Todo`;
}
