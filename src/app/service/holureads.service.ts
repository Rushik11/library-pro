import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GET_URL } from '../constant/booksURL'

 @Injectable({
  providedIn: 'root'
})
export class HolureadsService {
  categoryUrl = GET_URL.URL
  constructor(private http: HttpClient) { }

  getCategory( ){
    return this.http.get(this.categoryUrl)
  }
}
