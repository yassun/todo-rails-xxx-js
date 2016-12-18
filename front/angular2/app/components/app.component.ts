import { Component } from '@angular/core';
import { GithubRibbonComponent } from './github-ribbon.component';

@Component({
  selector: 'todo-app',
  template: `<github-ribbon></github-ribbon><router-outlet></router-outlet>`
})
export class AppComponent  { }
