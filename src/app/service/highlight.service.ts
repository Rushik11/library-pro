import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GET_URL } from '../constant/booksURL';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {
  getHighLightBookList = GET_URL.GET_HIGHLIGHT_BOOK_URL
  getHighLightBookByID = GET_URL.GET_HIGHLIGHT_BOOK_BY_ID
  constructor(private http: HttpClient) { }

  getHighLightBook(){
    return this.http.get(this.getHighLightBookList)
  }
  getHighLightByBookId(id:any){
    let params = new HttpParams();
    params = params.set('id',id)
    return this.http.get(this.getHighLightBookByID,{params})
  }
}
