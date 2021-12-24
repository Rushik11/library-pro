import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { GET_URL } from '../constant/booksURL';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {
  URL = GET_URL.GET_BOOK_DETAIL_URL;

  constructor(
    private http:HttpClient
  ) { }

  getBookTopic(options :any){
    let { id,page } =options

    let params = new HttpParams();
    if (id) {params = params.set('id', id) }
    if(page){params = params.set('page',page)}
    return this.http.get(this.URL+'/getBookByDetails',{params})
  }
}
