import { Component } from '@angular/core';
import { TodoService } from '../app.service';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html'
})
export class TodosFormComponent {
  todos: any[] = [];

  constructor(private todosService: TodoService) {}

  addTodo({ title }) {
    this.todosService.addTodo({ title });
  }
}
