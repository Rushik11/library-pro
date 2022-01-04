import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GET_URL } from '../constant/booksURL';

@Injectable({
  providedIn: 'root',
})
export class BookDetailsService {
  URL = GET_URL.GET_BOOK_DETAIL_URL;
  BOOK_DETAIL_URL = GET_URL.GET_HIGHLIGHT_URL;

  constructor(private http: HttpClient) {}

  getBookTopic(options: any) {
    let { id, page } = options;

    let params = new HttpParams();
    if (id) {
      params = params.set('id', id);
    }
    if (page) {
      params = params.set('page', page);
    } else {
      params = params.set('page', 1);
    }
    return this.http.get(this.URL + '/getBookByDetails', { params });
  }

  postHighLight(data: any) {
    return this.http.post(this.BOOK_DETAIL_URL, data);
  }
  getHighLight(options: any) {
    let { id, page_no } = options;
    let params = new HttpParams();
    if (id) {
      params = params.set('id', id);
    }
    if (page_no) {
      params = params.set('page_no', page_no);
    } else {
      params = params.set('page_no', 1);
    }
    return this.http.get(this.BOOK_DETAIL_URL + '/getAllBookHighLight', {
      params,
    });
  }
}
