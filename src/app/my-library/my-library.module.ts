import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyLibraryComponent } from './my-library.component';


@NgModule({
  declarations: [MyLibraryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyLibraryComponent,
        children: [
          {
            path: 'reading',
            loadChildren: () =>
              import('./reading-now/reading-now.module').then(
                (m) => m.ReadingNowModule
              ),
          },
          {
            path: '',
            redirectTo:'reading',
            pathMatch: 'full'
          },
          {
            path: 'favorite',
            loadChildren: () =>
              import('./favorite/favorite.module').then(
                (m) => m.FavoriteModule
              ),
          },
          {
            path: 'completed',
            loadChildren: () =>
              import('./completed/completed.module').then(
                (m) => m.CompletedModule
              ),
          },
          {
            path: 'note-highlight',
            loadChildren: () =>
              import('./note-high-light/note-high-light.module').then(
                (m) => m.NoteHighLightModule
              ),
          },
        ],
      },
    ]),
  ],
})
export class MyLibraryModule { }
