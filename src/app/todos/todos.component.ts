import { Component } from '@angular/core';
import { TodoService } from '../app.service';
import { TodoItem } from '../todo';
import { List } from 'immutable';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent {
  todos: List<TodoItem> = this.todosService.getTodos();
  constructor(private todosService: TodoService) {}

  searchTodo({ searchString }) {
    this.todosService.searchTodos(searchString);
    this.todos = this.todosService.getDefaultTodos();
  }

  completeTodo({ todo }) {
    this.todos = this.todosService.completeTodo({ todo });
  }

  removeTodo({ todo }) {
    this.todos = this.todosService.removeTodo({ todo });
  }
  firstPage() {
    this.todos = this.todosService.firstPage();
  }
  previousPage() {
    this.todos = this.todosService.previousPage();
  }
  nextPage() {
    this.todos = this.todosService.nextPage();
  }
  lastPage() {
    this.todos = this.todosService.lastPage();
  }
}
