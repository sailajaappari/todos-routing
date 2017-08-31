import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() item: TodoItem;
  @Output() onChange = new EventEmitter();
  @Output() onRemove = new EventEmitter();
}
