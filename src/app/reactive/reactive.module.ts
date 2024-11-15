import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicPageComponent } from './pages/basicPage/basicPage.component';
import { DynamicPageComponent } from './pages/dynamicPage/dynamicPage.component';
import { SwitchesPageComponent } from './pages/switchesPage/switchesPage.component';


@NgModule({
  declarations: [ BasicPageComponent , DynamicPageComponent , SwitchesPageComponent ],
  imports: [
    CommonModule,
    ReactiveRoutingModule , 
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
