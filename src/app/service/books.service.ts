import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { GET_URL } from '../constant/booksURL';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  URL = GET_URL.GET_BOOK_URL;
  
  constructor(private http: HttpClient) {}
  getBookList() {
    return this.http.get(this.URL);
  }
  getBooksByCategory(id: any) {
    let params = new HttpParams();
    params = params.set('id', id)
    return this.http.get(this.URL + '/byCategory', { params });
  }
  getBookById(id:any){
    return this.http.get(`${this.URL}/${id}`)

  }
}



