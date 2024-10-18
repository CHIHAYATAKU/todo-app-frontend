// mocks/todo-category.mock.ts
import { ToDoCategory, CategoryColor } from '../models/todo-category.model';

export const mockCategories: ToDoCategory[] = [
  {
    id: 1,
    name: 'デザイン',
    slug: 'design',
    color: CategoryColor.Red,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: '開発',
    slug: 'development',
    color: CategoryColor.Blue,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: 'データベース',
    slug: 'database',
    color: CategoryColor.Yellow,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
];
