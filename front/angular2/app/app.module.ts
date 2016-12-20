import './rxjs-extensions';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }       from './components/app.component';
import { TodoComponent }      from './components/todo.component';
import { TodoListComponent }  from './components/todo-list.component';
import { HeaderComponent }    from './components/header.component';
import { FooterComponent }    from './components/footer.component';

import { GithubRibbonComponent }    from './components/github-ribbon.component';

import { TodoService }        from './services/todo.service';
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
    TodoListComponent,
    HeaderComponent,
    FooterComponent,
    GithubRibbonComponent
  ],
  providers: [ TodoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
