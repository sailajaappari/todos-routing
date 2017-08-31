import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent {
  searchString: string;
  @Output() onSearch = new EventEmitter();
  submit({
    value,
    valid
  }: {
    value: { searchString: string };
    valid: boolean;
  }) {
    if (!value.searchString) {
      return;
    }
    this.onSearch.emit({ searchString: value.searchString });
  }
}
