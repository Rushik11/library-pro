import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {HighlightService} from '../../../service/highlight.service'
import {Subscription} from 'rxjs'
import {getFullHighLightBook} from '../../../mapper/HighLightBook'
import {highLight} from './full-highLight.model'
@Component({
  selector: 'app-full-highlight',
  templateUrl: './full-highlight.component.html',
  styleUrls: ['./full-highlight.component.css']
})
export class FullHighlightComponent implements OnInit {
  id = this.router.snapshot.params.id
  subscription = new Subscription()
  fullHighLightList:highLight = new highLight();
  constructor(
    private router:ActivatedRoute,
    private route:Router,
    private highLights:HighlightService
  ) { }

  ngOnInit(): void {
   this.subscription.add(this.highLights.getHighLightByBookId(this.id).subscribe((res :highLight)=>{
     this.fullHighLightList.highLight = res.highLight?.map(getFullHighLightBook)
     console.log(this.fullHighLightList.highLight);
     
     
   }))
  
    
  }
  getBookDetails(){
    this.route.navigate([`/bookDetails/${this.id}`])
  }

}
