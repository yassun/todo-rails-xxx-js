export const htmlTemplate = `
<div class="container">
  <div class="row">
      <div class="row">
        <div class="input-field col s6">
          <input [(ngModel)]="todo.title" id="input_text" type="text" length="100">
          <label [ngClass]="{'active': todo.title }" for="input_text">Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea [(ngModel)]="todo.description" id="textarea1" class="materialize-textarea" length="200"></textarea>
          <label [ngClass]="{'active': todo.description }" for="textarea1">Description</label>
        </div>
      </div>
      <div class="center-align">
        <span><a (click)="save()" class="btn-floating waves-effect waves-light green"><i class="material-icons">note_add</i></a></span>
        <span><a (click)="delete()" class="btn-floating waves-effect waves-light red"><i class="material-icons">delete</i></a></span>
      </div>
  </div>
</div>
`;

