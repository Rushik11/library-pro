import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GET_URL } from '../constant/booksURL';

@Injectable({
  providedIn: 'root',
})
export class ReddingBookService {
  getReadUrl = GET_URL.GET_REDDING_BOOK_URL;
  postReadUrl = GET_URL.POST_REDDING_BOOK_URL;
  postCompleteUrl = GET_URL.POST_COMPLETE_BOOK_URL;
  getCompleteUrl = GET_URL.GET_COMPLETE_BOOK_URL;
  getCompleteBookById = GET_URL.GET_COMPLETE_BOOK_BY_ID
  addToFavoriteBook= GET_URL.ADD_FAVORITE_BOOK_URL
  getFavoriteBookList = GET_URL.GET_FAVORITE_BOOK_URL
  constructor(private http: HttpClient) {}

  addReddingBook(id: any) {
    return this.http.post(this.postReadUrl, { bookId: id });
  }
  getReddingBook() {
    return this.http.get(this.getReadUrl);
  }
  getCompleteReddingBook() {
    return this.http.get(this.getCompleteUrl);
  }
  getReadingBookById(options: any) {
    let params = new HttpParams();
    let { id } = options;
    if (id) {
      params = params.set('bookId', id);
    }
    return this.http.get(this.getCompleteBookById, { params });
  }
  postBookTOCompleteRedding(options: any) {
    const { bookId } = options;
    return this.http.put(this.postCompleteUrl, { bookId });
  }
  postFavoriteBook(id:any){
    return this.http.put(this.addToFavoriteBook, { id });
  }
  getFavoriteBook(){
    return this.http.get(this.getFavoriteBookList);
  }
}
