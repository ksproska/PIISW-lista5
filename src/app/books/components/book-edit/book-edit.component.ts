import { Component } from '@angular/core';
import {Book} from "../../model/book";
import {ActivatedRoute} from "@angular/router";
import {BooksService} from "../../services/books.service";
import {Location} from "@angular/common";

@Component({
  selector: 'bs-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent {
  readonly book: Book;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly booksService: BooksService,
    private _location: Location
  ) {
    this.book = this.activatedRoute.snapshot.data['book'];
  }

  onSubmit() {
    this.booksService.saveBook(this.book).subscribe();
    this._location.back();
  }
}
