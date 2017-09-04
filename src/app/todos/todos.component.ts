import { Component } from '@angular/core';
import { TodoService } from '../app.service';
import { TodoItem } from '../todo';
import { List } from 'immutable';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: List<TodoItem> = this.todosService.getDefaultTodos();
  constructor(private todosService: TodoService) {}

  searchTodo({ searchString }) {
    this.todos = this.todosService.searchTodos(searchString);
  }

  completeTodo({ todo }) {
    this.todos = this.todosService.completeTodo({ todo });
  }

  allTodos() {
    this.todos = this.todosService.allTodos();
  }

  completedTodos() {
    this.todos = this.todosService.completedTodos();
  }

  notCompletedTodos() {
    this.todos = this.todosService.notCompletedTodos();
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
