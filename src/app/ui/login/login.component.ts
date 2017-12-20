import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <nav>
  <a (click)='number = 1'>link 1</a>
  <a (click)='number = 2'>link 2</a>
  <a (click)='number = 3'>link 3</a>
  <a (click)='number = 4'>link 4</a>
  </nav>

  `,
  styles: []
})
export class LoginComponent implements OnInit {

  public temp: number;
  constructor() { }

  ngOnInit() {
  }

}
