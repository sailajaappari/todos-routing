import { List } from 'immutable';

export class TodoItem {
  readonly id: number;
  readonly title: string;
  readonly complete: boolean;
  constructor(todo: { id: number; title: string; complete: boolean }) {
    this.id = todo.id;
    this.title = todo.title;
    this.complete = todo.complete;
  }
}
