import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicPageComponent } from './pages/basicPage/basicPage.component';


@NgModule({
  declarations: [ BasicPageComponent ],
  imports: [
    CommonModule,
    ReactiveRoutingModule , 
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
