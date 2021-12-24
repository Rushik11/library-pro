import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {GET_URL} from '../constant/booksURL'

@Injectable({
  providedIn: 'root'
})
export class ChangPageServiceService {
  URL=GET_URL.GET_BOOK_DETAIL_URL
  constructor(
    private http:HttpClient
  ) { }
}
