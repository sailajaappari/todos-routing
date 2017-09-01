import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html'
})
export class TodoFilterComponent {
  @Output() all = new EventEmitter();
  @Output() completed = new EventEmitter();
  @Output() notDone = new EventEmitter();
}
