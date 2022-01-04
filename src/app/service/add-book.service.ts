import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GET_URL } from '../constant/booksURL';

@Injectable({
  providedIn: 'root',
})
export class AddBook {
  URL=GET_URL.GET_BOOK_URL 
  constructor(private http: HttpClient) {}

  addBook(value:any){
  return  this.http.post(this.URL,value)
  }
}
