import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HighlightService} from '../../service/highlight.service'
import {highLight} from './note-high-light.model'
import {getHighLightBook} from '../../mapper/HighLightBook'
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-note-high-light',
  templateUrl: './note-high-light.component.html',
  styleUrls: ['./note-high-light.component.css']
})
export class NoteHighLightComponent implements OnInit {
  subscripetion = new Subscription();
  getHighLightBookList:highLight = new highLight()
  constructor(
    private router:Router,
    private highLightBookList:HighlightService

  ) { }

  ngOnInit(): void {
    this.subscripetion.add(this.highLightBookList.getHighLightBook().subscribe((res:highLight)=>{
      this.getHighLightBookList.highLight = res.highLight?.map(getHighLightBook)
      console.log(this.getHighLightBookList.highLight);
      
      
    }))
  }
  getFullHighLight(id:any){
    this.router.navigate([`/library/note-highlight/fullHighLight/${id}`])
  }
}
