import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="main-page-wrapper">
    <div class="heading-wrapper">
      <h2 class="text-align-center">Canada Census</h2>
    </div>
  </div>
  <router-outlet></router-outlet>`,
})
export class AppComponent  {}
