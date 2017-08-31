import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html'
})
export class TodoPageComponent {
  @Output() first = new EventEmitter();
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();
  @Output() last = new EventEmitter();
}
