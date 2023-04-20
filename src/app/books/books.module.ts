import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { BookComponent } from './components/book/book.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import {FormsModule} from "@angular/forms";
import { ReviewCreateComponent } from './components/review-create/review-create.component';
import { ReviewListComponent } from './components/review-list/review-list.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookComponent,
    BookEditComponent,
    ReviewCreateComponent,
    ReviewListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ]
})
export class BooksModule { }
