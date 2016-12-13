import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent }        from './todo.component';
const routes: Routes = [
  { path: 'todo/:id', component: TodoComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

