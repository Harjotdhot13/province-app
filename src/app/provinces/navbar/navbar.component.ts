import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  template: `<div class="main-page-wrapper">
    <div class="heading-wrapper">
      <div class="col-xs-6 col-sm-4">
        <button type="button" class="btn btn-primary btn-lg btn-custom" (click)=homePage()>Home Page</button>
      </div>
      <div class="col-xs-6 col-sm-8">
        <h2>Canada Census</h2>
      </div>
    </div>
  </div>`,
})

export class NavbarComponent {
  constructor(private router: Router,) {
  }
  homePage() {
    this.router.navigate(['/provinces']);
  }
}
