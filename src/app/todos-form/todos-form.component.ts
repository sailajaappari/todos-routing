import { Component } from '@angular/core';
import { TodoService } from '../app.service';
import { TodoItem } from '../todo';
import { List } from 'immutable';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html'
})
export class TodosFormComponent {
  todos: List<TodoItem>;

  constructor(private todosService: TodoService) {
    this.todosService.defaultTodos = this.todosService.todos;
  }

  addTodo({ title }) {
    this.todosService.addTodo({ title });
  }
}
