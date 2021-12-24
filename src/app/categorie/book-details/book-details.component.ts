import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { detail } from './bookDetailsModel';
import { getBookTopic } from '../../mapper/bookTopic';
import { BookDetailsService } from '../../service/book-details.service';
import {ChangPageServiceService} from '../../service/chang-page-service.service'
import {options} from './option'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  subscription = new Subscription();
  options:options = new options();
  id: string = this.router.snapshot.params.id;
  number:number = 1
  allBookList: detail = new detail();
  page:any = 1;
  constructor(
    private router: ActivatedRoute,
    private bookDetailsServices: BookDetailsService
  ) {}

  ngOnInit(): void {
    this.getBookTopic();
}

getBookTopic(){
  this.options.id = this.id
  this.subscription.add(
    this.bookDetailsServices
      .getBookTopic(this.options)
      .subscribe((response: detail) => {
        this.allBookList.detail = response.detail?.map(getBookTopic) 
        this.options.page = response.page 
        
        
      })
  );
}

  nextPage(){
    this.options.page = this.options.page + 1
    this.bookDetailsServices.getBookTopic(this.options)
    console.log(this.options.page);
    
    this.getBookTopic();
  }
  priviesPage(){
    this.options.page = this.options.page - 1
    this.bookDetailsServices.getBookTopic(this.options)
    console.log(this.options.page);
    
    this.getBookTopic()
  }
}
