import { HttpBeerService } from './core/http-beer.service';
import { TemplateComponent } from './template/template.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    // canActivate: [ HttpBeerService ],
    // resolve: [ { poop: HttpBeerService } ]
  },
  { path: 'poop', loadChildren: './ui/ui.module#UiModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
