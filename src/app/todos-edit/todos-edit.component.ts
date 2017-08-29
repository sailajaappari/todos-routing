import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../app.service';

@Component({
  selector: 'app-todos-edit',
  templateUrl: './todos-edit.component.html'
})
export class TodosEditComponent implements OnInit {
  todoId: number;
  todo: { id: number; title: string; complete: boolean };
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.todoId = Number.parseInt(params.id);
      this.todo = this.todoService.getById(this.todoId);
    });
  }
  editTodo({ title }) {
    this.todoService.editTodo(title, this.todoId);
  }
}
