import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GuardsCheckEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <a routerLink=''>Home</a>
    <a routerLink="poop">Dashboard</a>
  </nav>
    <router-outlet></router-outlet>
    <router-outlet name='loader'></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';

  constructor(private routing: Router) {
    // routing.events.subscribe((event) => {
    //   if (event instanceof GuardsCheckEnd) {
    //     console.log('chuja, nie dziala');
    //   }
    // });
  }
}
