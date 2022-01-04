import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../service/books.service';
import { Subscription } from 'rxjs';
import { bookList } from './viewBookModel';
import { ReddingBookService } from '../../service/reading-book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {
  id: any = this.router.snapshot.params.id;
  subscription = new Subscription();
  bookById: bookList = new bookList();
  constructor(
    private router: ActivatedRoute,
    private bookServices: BooksService,
    private reddingBook: ReddingBookService
  ) {}

  ngOnInit(): void {
    this.getBookById();
  }

  getBookById() {
    this.subscription.add(
      this.bookServices.getBookById(this.id).subscribe((response: bookList) => {
        this.bookById.bookList = response.bookList;
        console.log(this.bookById.bookList?.favourite);

        this.bookById.categoryId = response.bookList?.categoryId;
      })
    );
  }

  addToFavorite() {
    this.subscription.add(
      this.reddingBook
        .postFavoriteBook(this.bookById.bookList?._id)
        .subscribe((res) => {
          console.log(res);
        })
    );
    this.getBookById();
  }
}
