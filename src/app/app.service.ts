import { Injectable } from '@angular/core';
import { List } from 'immutable';

@Injectable()
export class TodoService {
  todos: List<{ id: number; title: string; complete: boolean }> = List([
    {
      title: 'Eat pizza',
      id: 0,
      complete: true
    },
    {
      title: 'Do some coding',
      id: 1,
      complete: false
    },
    {
      title: 'Sleep',
      id: 2,
      complete: false
    },
    {
      title: 'Print tickets',
      id: 3,
      complete: true
    }
  ]);

  getTodos() {
    return this.todos;
  }

  addTodo({ title }) {
    this.todos = this.todos.push({
      title,
      id: this.todos.count() + 1,
      complete: false
    });
  }

  editTodo(title: string, id: number) {
    this.todos = this.todos.setIn([this.todos.findIndex(it => it.id === id)], {
      id: id,
      title: title,
      complete: false
    });
    // this.todos = [...this.todos.map(
    //   todo =>
    //     todo.id === id
    //       ? { id: todo.id, title: title, complete: todo.complete }
    //       : todo
    // )];
  }

  completeTodo({ todo }) {
    this.todos = this.todos.setIn(
      [this.todos.findIndex(it => it.id === todo.id)],
      {
        id: todo.id,
        title: todo.title,
        complete: true
      }
    );
    // this.todos = [
    //   ...this.todos.map(
    //     item =>
    //       item.id === todo.id
    //         ? Object.assign({}, item, { complete: true })
    //         : item
    //   )
    // ];
  }

  removeTodo({ todo }) {
    this.todos = this.todos.delete(
      this.todos.findIndex(it => it.id === todo.id)
    );

    // this.todos = this.todos.filter(({ id }) => id !== todo.id);
  }

  getById(id: number) {
    return this.todos.find(x => x.id === id);
  }
}
