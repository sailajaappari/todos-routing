import { Injectable } from '@angular/core';
import { List, Map } from 'immutable';
import { TodoItem } from './todo';

@Injectable()
export class TodoService {
  todos: List<TodoItem> = List([
    new TodoItem({
      title: 'Eat pizza',
      id: 0,
      complete: true
    }),
    new TodoItem({
      title: 'Do some coding',
      id: 1,
      complete: false
    }),
    new TodoItem({
      title: 'Sleep',
      id: 2,
      complete: false
    }),
    new TodoItem({
      title: 'Print tickets',
      id: 3,
      complete: true
    })
  ]);

  defaultTodos: List<TodoItem> = this.todos;

  viewTodos = Map({
    pageNumber: 0,
    todosPerPage: 5,
    totalPages: Math.ceil(this.todos.count() / 5)
  });

  pagination(pageNumber: number) {
    return this.todos
      .skip(this.viewTodos.get('todosPerPage') * pageNumber)
      .take(this.viewTodos.get('todosPerPage'))
      .toList();
  }

  getTodos() {
    return this.todos.take(5).toList();
  }

  getDefaultTodos() {
    return this.defaultTodos.take(5).toList();
  }

  getTodosWithPage(pageNumber: number) {
    return this.pagination(pageNumber);
  }

  addTodo({ title }) {
    this.todos = this.todos.push({
      title,
      id: this.todos.count() + 1,
      complete: false
    });
    this.viewTodos = this.viewTodos.set(
      'totalPages',
      Math.ceil(this.todos.count() / this.viewTodos.get('todosPerPage'))
    );
    // return this.todos;
  }

  editTodo(title: string, id: number) {
    this.todos = this.todos.setIn([this.todos.findIndex(it => it.id === id)], {
      id: id,
      title: title,
      complete: false
    });
    return this.getTodosWithPage(this.viewTodos.get('pageNumber'));
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
    return this.getTodosWithPage(this.viewTodos.get('pageNumber'));
  }

  removeTodo({ todo }) {
    this.todos = this.todos.delete(
      this.todos.findIndex(it => it.id === todo.id)
    );
    this.viewTodos = this.viewTodos.set(
      'totalPages',
      Math.ceil(this.todos.count() / this.viewTodos.get('todosPerPage'))
    );
    return this.getTodosWithPage(this.viewTodos.get('pageNumber'));
  }

  getById(id: number) {
    return this.todos.find(x => x.id === id);
  }

  searchTodos(searchString: string) {
    this.defaultTodos = this.todos
      .filter(
        (todo: TodoItem): boolean => todo.title.indexOf(searchString) !== -1
      )
      .toList();
  }

  firstPage() {
    this.viewTodos = this.viewTodos.set('pageNumber', 0);
    return this.pagination(0);
  }

  previousPage() {
    if (this.viewTodos.get('pageNumber') === 0) {
      this.viewTodos = this.viewTodos.set('pageNumber', 0);
      return this.pagination(0);
    } else {
      this.viewTodos = this.viewTodos.update('pageNumber', value => value - 1);
      return this.pagination(this.viewTodos.get('pageNumber'));
    }
  }

  lastPage() {
    this.viewTodos = this.viewTodos.update(
      'pageNumber',
      value => this.viewTodos.get('totalPages') - 1
    );
    return this.pagination(this.viewTodos.get('totalPages') - 1);
  }

  nextPage() {
    if (
      this.viewTodos.get('pageNumber') <
      this.viewTodos.get('totalPages') - 2
    ) {
      this.viewTodos = this.viewTodos.update('pageNumber', value => value + 1);
      return this.pagination(this.viewTodos.get('pageNumber'));
    } else {
      return this.lastPage();
    }
  }
}
