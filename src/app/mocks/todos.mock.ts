// mocks/todo.mock.ts
import { ToDo, ToDoState } from '../models/todo.model';
import { ToDoCategory } from '../models/todo-category.model';
import { mockCategories } from './categories.mock';

export const mockTodos: (ToDo & { category?: ToDoCategory })[] = [
  {
    id: 1,
    categoryId: 1,
    title: 'デザインをいい感じにする',
    body: 'ヘッダーのデザインをもっといい感じに',
    state: ToDoState.ToDo,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    category: mockCategories.find(cat => cat.id === 1),
  },
  {
    id: 2,
    categoryId: 2,
    title: 'Controllerの修正',
    body: 'Controller名をもっといい感じに',
    state: ToDoState.In_PROGRESS,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    category: mockCategories.find(cat => cat.id === 2),
  },
  {
    id: 3,
    categoryId: 3,
    title: '新しいDB環境の作成',
    body: 'タイトル通り',
    state: ToDoState.DONE,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    category: mockCategories.find(cat => cat.id === 3),
  },
];
