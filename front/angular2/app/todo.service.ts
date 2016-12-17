import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private todosUrl = 'http://127.0.0.1:3000/todos';
  constructor(private http: Http) { }

  getTodos(): Promise<Todo[]> {
    return this.http.get(this.todosUrl)
               .toPromise()
               .then(response => response.json() as Todo[])
               .catch(this.handleError);
  }

  getTodo(id: number): Promise<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  update(todo: Todo): Promise<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http
               .put(url, JSON.stringify(todo), {headers: this.headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  create(todo: Todo): Promise<Todo> {
    return this.http
               .post(this.todosUrl, JSON.stringify(todo), {headers: this.headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
               .toPromise()
               .then(() => null)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

