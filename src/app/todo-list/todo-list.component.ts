import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  @Input() todos;
  @Output() onComplete = new EventEmitter();
  @Output() onDelete = new EventEmitter();
}
