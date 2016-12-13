import './rxjs-extensions';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }       from './app.component';
import { TodoComponent }      from './todo.component';
import { TodoListComponent }  from './todo-list.component';

import { TodoService }        from './todo.service';
import { AppRoutingModule }   from './app-routing.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent
  ],
  providers: [ TodoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
