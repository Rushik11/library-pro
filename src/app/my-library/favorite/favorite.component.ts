import { Component, OnInit } from '@angular/core';
import { ReddingBookService } from '../../service/reading-book.service';
import { Subscription } from 'rxjs';
import { favourites } from './favorite-book.model';
import { getFavoriteBookList } from '../../mapper/favorite-book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  subscription = new Subscription();
  favoriteBook: favourites = new favourites();
  constructor(
    private getFavoriteBook: ReddingBookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.getFavoriteBook.getFavoriteBook().subscribe((res: favourites) => {
        this.favoriteBook.favourites = res.favourites?.map(getFavoriteBookList);
      })
    );
  }
  getBookDetail(id: any) {
    let bookId = this.favoriteBook.favourites?.find(
      (item) => id === item.bookId
    );
    console.log(bookId?.bookId);
    this.router.navigate([`/viewBook/${bookId?.bookId}`])
  }
}
