export const htmlTemplate = `
  <div class="container">
    <app-header></app-header>
    <div class="center">
      <a [routerLink]="['/todo', 'new']" class="add-btton"> Add Todo </a>
    </div>
    <div class="todo-list row">
      <div *ngFor="let todo of todos" class="col s12 m6 l3">
        <a [routerLink]="['/todo', todo.id]">
          <div class="todo card hoverable">
            <div class="card-content">
              <span class="todo__title black-text">{{todo.title}}</span>
              <p class="todo__description grey-text">{{todo.description}}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
`;
