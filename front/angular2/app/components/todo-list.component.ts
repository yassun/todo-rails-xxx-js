import { Component } from '@angular/core';

import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { htmlTemplate } from './todo-list.component.html';

@Component({
  selector: 'todo-list',
  styleUrls: ['angular2/dist/css/components/todo-list.component.css'],
  template: htmlTemplate
})
export class TodoListComponent {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
    this.todoService.getTodos()
      .then(todos => this.todos = todos);
  }
}
