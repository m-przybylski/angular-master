import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderComponent } from './loader/loader.component';
import { DashItemComponent } from './dashboard/dash-item.component';
import { DashDetailsComponent } from './dashboard/dash-details.component';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  declarations: [LoginComponent, DashboardComponent, LoaderComponent, DashItemComponent, DashDetailsComponent]
})
export class UiModule { }
