import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddBookComponent} from './add-book/add-book.component'


const routes: Routes = [
  { path: 'allBook', loadChildren: ()=> import('./categorie/categories.module').then(m => m.CategoriesModule)},
  {path:'library',loadChildren: ()=> import('./my-library/my-library.module').then(m =>m.MyLibraryModule)},
  {path:'addBook',component:AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
