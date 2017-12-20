import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>
      dashboard works!
    </p>
    {{ num }}
  `,
  styles: []
})
export class DashboardComponent {
  @Input() public num: number;
  constructor() { }

}
