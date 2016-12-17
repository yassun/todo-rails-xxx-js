import { Component, OnInit } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  styleUrls: [ 'todo-list.component.css' ],
  templateUrl: 'todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
    this.todoService.getTodos()
      .then(todos => this.todos = todos);
  }
}
