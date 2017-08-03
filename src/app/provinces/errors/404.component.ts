import { Component } from '@angular/core';

@Component({
  template: `
    <h1 class="errorMessage">404'd</h1>
    <h5 class="text-align-center">We are sorry. This page wasn't found on this server.</h5>
  `,
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 170px;
      text-align: center; 
    }
    @media(max-width:768px) {
      .errorMessage {
        font-size: 120px;
      }
    }
  `]
})
export class Error404Component { }
