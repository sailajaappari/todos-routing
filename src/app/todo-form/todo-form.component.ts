import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  title: string;
  @Output() onAdd = new EventEmitter();

  submit({ value, valid }: { value: { title: string }; valid: boolean }) {
    if (!value.title) {
      return;
    }
    this.onAdd.emit({ title: value.title });
    this.title = '';
  }
}
