import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  detail,
  highLightDetails,
  highLight,
  bookStyle,
  complete,
} from './bookDetailsModel';
import { BookDetailsService } from '../../service/book-details.service';
import { ReddingBookService } from '../../service/reading-book.service';
import { options } from './option';
import { getBookDetails, getHighLight } from '../../mapper/book-details';
import { isReddingBookComplete } from '../../mapper/redding-book';
import * as $ from 'jquery';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  subscription = new Subscription();
  options: options = new options();
  id: string = this.router.snapshot.params.id;
  allBookList: detail = new detail();
  isComplete: complete = new complete();
  isNextDisable: Boolean = false;
  showNoteIcon: Boolean = false;
  showHighsLightIcon: Boolean = false;
  showMenu: Boolean = false;
  isPriviesDisable: Boolean = true;
  fontStyle: bookStyle = new bookStyle();
  highLightDetails: highLightDetails = new highLightDetails();
  highLights: highLight = new highLight();
  constructor(
    private router: ActivatedRoute,
    private bookDetailsServices: BookDetailsService,
    private renderer: Renderer2,
    private addReddingBook: ReddingBookService
  ) {}

  ngOnInit(): void {
    this.getBookTopic();
    let data: any = localStorage.getItem('bookStyle');
    data = JSON.parse(data);
    if (!data) {
      data = {
        fontSize: '21px',
        fontFamily: 'Tinos',
        fontBgColor: '#fff',
        fontColor: 'black',
      };
      localStorage.setItem('bookStyle', JSON.stringify(data));
    }
    this.fontStyle = data;
  }
  toggleMenu() {
    this.showMenu = true;
    console.log(this.showMenu);
  }
  getColour(bgColor: any, color: any) {
    this.fontStyle.fontBgColor = bgColor;
    this.fontStyle.fontColor = color;
    localStorage.setItem('bookStyle', JSON.stringify(this.fontStyle));
  }
  getFontSize(data: any) {
    this.fontStyle.fontSize = data;
    localStorage.setItem('bookStyle', JSON.stringify(this.fontStyle));
  }
  getFontFamily(data: any) {
    this.fontStyle.fontFamily = data;
    localStorage.setItem('bookStyle', JSON.stringify(this.fontStyle));
  }
  getBookTopic() {
    this.options.id = this.id;
    this.subscription.add(
      this.bookDetailsServices
        .getBookTopic(this.options)
        .subscribe((response: detail) => {
          this.allBookList.detail = getBookDetails(response);
          this.options.page = response.page;
          this.options.count = response.countBook;
          this.options.id = response.bookdetailsId;
          this.options.page_no = response.page_no;
          this.highLightDetails.bookId = this.allBookList.detail?.booksId;
          this.options.bookId = this.allBookList.detail?.bookId;
          this.getHighLight();
          if (this.options.count === 1) {
            this.isNextDisable = true;
            this.showNoteIcon = true;
          }
        })
    );
    this.subscription.add(
      this.addReddingBook.addReddingBook(this.id).subscribe()
    );

    this.subscription.add(
      this.addReddingBook
        .getReadingBookById(this.options)
        .subscribe((res: complete) => {
          this.isComplete.complete = isReddingBookComplete(res);
          console.log(this.isComplete.complete);
        })
    );
  }
  postBookToComplete() {
    this.options.bookId = this.allBookList.detail?.bookId;
    this.subscription.add(
      this.addReddingBook
        .postBookTOCompleteRedding(this.options)
        .subscribe(() => {})
    );
    this.getBookTopic();
  }
  nextPage() {
    this.options.page = this.options.page + 1;
    this.isPriviesDisable = false;
    if (this.options.page === this.options.count) {
      this.isNextDisable = true;
      this.showNoteIcon = true;
    }
  }
  priviesPage() {
    this.isNextDisable = false;
    this.showNoteIcon = false;
    this.options.page = this.options.page - 1;
    if (this.options.page <= 1) {
      this.isPriviesDisable = true;
    }
  }

  getValue() {
    const select: any = window.getSelection()?.toString();
    let content: any = document.getElementById('content');
    if (select.length > 5) {
      this.showHighsLightIcon = true;
      this.highLightDetails.selection = select;
    } else {
      this.showHighsLightIcon = false;
    }
  }

  setHighLight() {
    this.highLightDetails.bookdetailsId =
      this.allBookList.detail?.bookdetailsId;
    this.highLightDetails.page_no = this.allBookList.detail?.page_no;

    this.subscription.add(
      this.bookDetailsServices
        .postHighLight(this.highLightDetails)
        .subscribe((response: any) => {
          this.getHighLight();
        })
    );
    this.showNoteIcon = false;
    this.getHighLight();
  }
  disableItems(){
    this.showHighsLightIcon = false;
  }
  getHighLight() {
    this.options.id = this.allBookList.detail?.bookdetailsId;
    this.options.page_no = this.allBookList.detail?.page_no;

    this.subscription.add(
      this.bookDetailsServices
        .getHighLight(this.options)
        .subscribe((response: highLight) => {
          this.highLights.highLight = response.highLight?.map(getHighLight);
          this.highLights.highLight?.map((item: any) => {
            const data: any = item.details;
            let content: any = document.getElementById('content');
            let innerHTML: any = content?.innerHTML.replaceAll('<br>', '\n');
            let index: any = innerHTML.indexOf(data);
            if (index >= 0) {
              innerHTML = `${innerHTML.substring(0, index)}<span class='highlight'>${innerHTML.substring(index,index + data.length )} </span>${innerHTML.substring(index + data.length)}`;
               return content.innerHTML = innerHTML.replaceAll(
                /(?:\r\n|\r|\n)/g,
                '<br>'
              );
            }
          });
          let btn = document.querySelectorAll('span');
          for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', () => {
              btn[i].style.border = '2px dotted black';
            });
          }
        })
    );
  }
  getValues() {
    alert('hiii');
  }
}
