import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HolureadsService } from '../service/holureads.service';
import { Subscription } from 'rxjs';
import { CategoryList } from '../categorie/categories/categoryModelList';
import { getCategoryList } from '../mapper/category.list';
import {AddBook} from '../service/add-book.service'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  constructor(
    private categoric: HolureadsService,
    private addBookService:AddBook
    ) {}
  addBook = new FormGroup({
    img: new FormControl(''),
    title: new FormControl(''),
    auother_name: new FormControl(''),
    categoryId: new FormControl(''),
    overview: new FormControl(''),
    thought: new FormControl(''),
    about_the_author: new FormControl(''),
  });
  subscription = new Subscription();
  categoricList: CategoryList = new CategoryList();
  setError: any = ''
  errorList:any =[]

  ngOnInit(): void {
    this.subscription.add(
      this.categoric.getCategory().subscribe((response: CategoryList) => {
        this.categoricList.categorylist =
          response.categorylist?.map(getCategoryList);
        console.log(this.categoricList.categorylist);
      })
    );
  }

  addBookDetails() {
    console.log(this.addBook.value);
    this.getValidation(this.addBook.value);
    console.log(this.errorList);
    
    setTimeout(()=>{
      this.setError =""
    },2000)
    // this.subscription.add(this.addBookService.addBook(this.addBook.value).subscribe((response :any)=>{
    //   console.log(response);
    // }))
  }

  getValidation(vel :any){
    
    !vel.img ? this.errorList.push('no img provid'):this.errorList.pop('no img provid');
    !vel.title ? this.errorList.push('no img title'): "";
    !vel.auother_name ? this.errorList.push('no img auother_name'): "";
    
    return this.errorList
    
  }
}

