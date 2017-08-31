import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosFormComponent } from './todos-form/todos-form.component';
import { TodoService } from './app.service';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodosEditComponent } from './todos-edit/todos-edit.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';

export const todoRoutes: Routes = [
  { path: 'list', component: TodosComponent },
  { path: 'create', component: TodosFormComponent },
  { path: 'todos/:id/edit', component: TodosEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    TodoFormComponent,
    TodosFormComponent,
    TodoEditComponent,
    TodosEditComponent,
    TodoPageComponent,
    TodoSearchComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(todoRoutes)],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
