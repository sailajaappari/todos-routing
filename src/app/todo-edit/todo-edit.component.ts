import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html'
})
export class TodoEditComponent {
  title: string;
  @Input() todo;

  @Output() onEdit = new EventEmitter();

  submit({ value, valid }: { value: { title: string }; valid: boolean }) {
    this.onEdit.emit({ title: value.title });
  }
}
