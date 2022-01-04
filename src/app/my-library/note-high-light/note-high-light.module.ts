import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoteHighLightComponent} from './note-high-light.component'
import {RouterModule} from '@angular/router'
import {FullHighlightComponent} from './full-highlight/full-highlight.component'


@NgModule({
  declarations: [NoteHighLightComponent,FullHighlightComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:NoteHighLightComponent},
      {path:'fullHighLight/:id',component:FullHighlightComponent},
    ])
  ]
})
export class NoteHighLightModule { }
