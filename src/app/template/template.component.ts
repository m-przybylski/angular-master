// import { ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  template: `
    <p>
      template works!
    </p>
  `,
  styles: []
})
export class TemplateComponent implements OnInit {

  // constructor(private route: ActivatedRouteSnapshot) { }

  ngOnInit() {
    // console.log(this.route.data.poop);
  }

}
