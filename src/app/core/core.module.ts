import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpBeerService } from './http-beer.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [HttpBeerService]
})
export class CoreModule { }
