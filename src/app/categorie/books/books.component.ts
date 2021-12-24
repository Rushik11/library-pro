import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { Subscription } from 'rxjs';
import { Booklist } from './book.model';
import { getBookList } from '../../mapper/book.list';
import {Router} from '@angular/router'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  booksModel: Booklist = new Booklist();
  subscription = new Subscription();
  constructor(
    private bookService: BooksService,
    private router:Router
    ) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.subscription.add(
      this.bookService.getBookList().subscribe((response: Booklist) => {
        this.booksModel.Booklist = response.Booklist?.map(getBookList);
        console.log(this.booksModel.Booklist);
        
      })
    );
    window.scrollTo({ top: 800, left: 100, behavior: 'smooth' });
    this.booksModel.categoryName = "All Summary";

  }

  showBook(val: any, name: any) {
    this.subscription.add(
      this.bookService
        .getBooksByCategory(val)
        .subscribe((response: Booklist) => {
          this.booksModel.Booklist = response.Booklist?.map(getBookList);   
        })
        
    );
    window.scrollTo({ top: 800, left: 100, behavior: 'smooth' });
    this.booksModel.categoryName = name;
  }

  showFullBook(id :any){
   this.router.navigate([`/viewBook/${id}`])
  }
}

