import { Component, OnInit, ViewChild } from '@angular/core';
import { HolureadsService } from '../../service/holureads.service';
import { BooksComponent } from '../books/books.component';
import { Subscription } from 'rxjs';
import { CategoryList } from './categoryModelList';
import { getCategoryList } from '../../mapper/category.list';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
})
export class CategorieComponent implements OnInit {
  catagories: CategoryList = new CategoryList();
  activeId : string = '';
  subscription = new Subscription();

  @ViewChild(BooksComponent, { static: true }) books?: BooksComponent;
  constructor(private holUserReads: HolureadsService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.holUserReads.getCategory().subscribe((response: CategoryList) => {
        this.catagories.categorylist =
          response.categorylist?.map(getCategoryList);
      })
    );
    this.activeId = 'all Summary'
    
  }

  editData(val:any,name: any) {
    this.books?.showBook(val,name);
    this.activeId = val
  }
  allSummary(){
    this.books?.getAllBooks();
    this.activeId = 'all Summary'
  }
}
