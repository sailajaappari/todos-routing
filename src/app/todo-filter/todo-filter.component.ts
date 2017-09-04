import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent {
  @Output() all = new EventEmitter();
  @Output() completed = new EventEmitter();
  @Output() notDone = new EventEmitter();
}
