import { Component, HostListener, OnInit } from '@angular/core';
import { TodoService } from '../../../../services/todo.service';
import { ToDo, ToDoState } from '../../../../models/todo.model';
import { categoryColorMap, ToDoCategory } from '../../../../models/todo-category.model';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {
  todos: (ToDo & { category?: ToDoCategory })[] = [];
  categories: ToDoCategory[] = [];
  activeTodoId: number | null = null;

  constructor(private todoService: TodoService, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadTodos();
    this.loadCategories(); // カテゴリをロード
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

loadCategories(): void {
  this.categoryService.getCategories().subscribe(categories => {
    this.categories = categories;
  });
}

  togglePopup(todoId: number): void {
    this.activeTodoId = this.activeTodoId === todoId ? null : todoId;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('.todo-ele');
    if (!clickedInside) {
      this.activeTodoId = null; // ポップアップを閉じる
    }
  }

  getCategoryColor(category: ToDoCategory): string {
  return categoryColorMap[category.color];
  }
  
  getStateString(state: ToDoState): string {
    switch (state) {
      case ToDoState.ToDo:
        return 'TODO(着手前)';
      case ToDoState.In_PROGRESS:
        return '進行中';
      case ToDoState.DONE:
        return '完了';
      default:
        return 'Unknown'; // デフォルト値
    }
  }
}
