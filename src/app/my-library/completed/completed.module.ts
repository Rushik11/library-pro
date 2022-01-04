import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompletedComponent} from './completed.component'
import {RouterModule} from '@angular/router'



@NgModule({
  declarations: [CompletedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:CompletedComponent}
    ])
  ]
})
export class CompletedModule { }
