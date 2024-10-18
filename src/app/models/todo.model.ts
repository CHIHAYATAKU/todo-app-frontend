export interface ToDo {
  id?: number;
  categoryId: number;
  title: string;
  body: string;
  state: ToDoState;
  updatedAt: string;
  createdAt: string;
}

export enum ToDoState {
  ToDo = 0,
  In_PROGRESS = 1,
  DONE = 2
}