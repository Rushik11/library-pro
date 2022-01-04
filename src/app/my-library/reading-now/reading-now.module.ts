import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReadingNowComponent} from './reading-now.component'
import {RouterModule} from '@angular/router'


@NgModule({
  declarations: [ReadingNowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:ReadingNowComponent}
    ])
  ]
})
export class ReadingNowModule { }
