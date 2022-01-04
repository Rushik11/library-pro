import { Component, OnInit } from '@angular/core';
import {ReddingBookService} from '../../service/reading-book.service'
import { Subscription } from 'rxjs';
import {Router,ActivatedRoute} from '@angular/router'
import {ReddingBook} from './redding-book.model'
import {getReddingBookList} from '../../mapper/redding-book'

@Component({
  selector: 'app-reading-now',
  templateUrl: './reading-now.component.html',
  styleUrls: ['./reading-now.component.css']
})
export class ReadingNowComponent implements OnInit {
  reddingBook:ReddingBook = new ReddingBook()
  subscription = new Subscription();
  constructor(
   private bookRedding:ReddingBookService,
   private router:Router
  ) { }

  ngOnInit(): void {
    this.subscription.add(this.bookRedding.getReddingBook().subscribe((response:ReddingBook)=>{
      this.reddingBook.Reads = response.Reads?.map(getReddingBookList)
      console.log(this.reddingBook.Reads);
      
    }))
  }
  viewBook(id:any){
    let bookId = this.reddingBook.Reads?.find(
      (item) => id === item.bookId
    );
    console.log(bookId);
    
    this.router.navigate([`viewBook/${bookId?.bookId}`])
  }

}
