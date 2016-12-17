import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  moduleId: module.id,
  selector: 'todo',
  templateUrl: 'todo.component.html',
})
export class TodoComponent {
  @Input() todo: Todo = new Todo();
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (isNaN(id)) return;
      this.todoService.getTodo(id)
        .then(todo => this.todo = todo);
    });
  }
  save(): void {
    if (this.todo.id) {
      this.todoService.update(this.todo)
        .then(() => this.goBack());
    }else{
      this.todoService.create(this.todo)
        .then(() => this.goBack());
    }
  }
  delete(): void {
    if (this.todo.id) {
      this.todoService.delete(this.todo.id)
        .then(() => this.goBack());
    }else{
      this.goBack()
    }
  }
  goBack(): void {
    this.router.navigate(['']);
  }
}

