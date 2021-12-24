import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategorieComponent } from './categories/categorie.component';
import { BooksComponent } from './books/books.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [CategorieComponent, BooksComponent, ViewBookComponent, BookDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CategorieComponent },
      {path:'viewBook/:id',component:ViewBookComponent},
      {path:'bookDetails/:id',component:BookDetailsComponent}
    ]),
  ],
})
export class CategoriesModule {}
