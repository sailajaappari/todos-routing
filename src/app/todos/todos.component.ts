import { Component } from '@angular/core';
import { TodoService } from '../app.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent {
  todos = this.todosService.getTodos();

  constructor(private todosService: TodoService) {}

  completeTodo({ todo }) {
    this.todosService.completeTodo({ todo });
    this.todos = this.todosService.getTodos();
  }

  removeTodo({ todo }) {
    this.todosService.removeTodo({ todo });
    this.todos = this.todosService.getTodos();
  }
}
