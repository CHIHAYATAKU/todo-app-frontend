export interface ToDoCategory {
  id?: number;
  name: string;
  slug: string;
  color: CategoryColor;
  updatedAt: string;
  createdAt: string;
}

export enum CategoryColor {
  Red = 1,
  Blue = 2,
  Yellow = 3,
}

export const categoryColorMap: { [key in CategoryColor]: string } = {
  [CategoryColor.Red]: '#FF0000',
  [CategoryColor.Blue]: '#0000FF',
  [CategoryColor.Yellow]: '#FFFF00',
};