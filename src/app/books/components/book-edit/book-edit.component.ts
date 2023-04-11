import { Component } from '@angular/core';
import {Book} from "../../model/book";
import {ActivatedRoute} from "@angular/router";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'bs-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent {
  readonly book: Book;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly booksService: BooksService) {
    this.book = this.activatedRoute.snapshot.data['books'];
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.booksService.saveBook(this.book).subscribe();
  }
}
