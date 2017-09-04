import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TodoItem } from '../todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent {
  title: string;
  @Input() todo: TodoItem;

  @Output() onEdit = new EventEmitter();

  submit({ value, valid }: { value: { title: string }; valid: boolean }) {
    this.onEdit.emit({ title: value.title });
  }
}
