import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {BooksService} from '../../service/books.service'
import { Subscription } from 'rxjs';
import {bookList} from './viewBookModel'

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  id:any = this.router.snapshot.params.id
  subscription = new Subscription();
  bookById :bookList = new bookList() 
  constructor(
    private router:ActivatedRoute,
    private bookServices:BooksService,

  ) { }

  ngOnInit(): void {
    this.subscription.add(this.bookServices.getBookById(this.id).subscribe((response :bookList)=>{
      this.bookById.bookList = response.bookList
      this.bookById.categoryId = response.bookList?.categoryId
    }))
   
  }
}
