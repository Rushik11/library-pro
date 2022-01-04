import { Component, OnInit } from '@angular/core';
import { ReddingBookService } from '../../service/reading-book.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { complete } from './complete-book.model';
import { getCompleteBook } from '../../mapper/complete-book';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent implements OnInit {
  getCompleteBookList: complete = new complete();
  subscription = new Subscription();
  constructor(private bookRedding: ReddingBookService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.bookRedding.getCompleteReddingBook().subscribe((response: complete) => {
        this.getCompleteBookList.complete = response.complete?.map(getCompleteBook);
        console.log(this.getCompleteBookList);
      })
    );
  }
}
