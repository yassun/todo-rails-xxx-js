import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styles: [
      '.title { color: #ee6e73;}',
      '.sub-title { font-size: small; }'
  ],
  template: `
  <header class="center">
    <h1 class="title">Todo Sample</h1>
    <h2 class="sub-title">Rails5 + Angular2 + TypeScript</h2>
  </header>
  `
})
export class HeaderComponent { }
