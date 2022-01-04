import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FavoriteComponent} from './favorite.component'



@NgModule({
  declarations: [FavoriteComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:FavoriteComponent}
    ])

  ]
})
export class FavoriteModule { }
