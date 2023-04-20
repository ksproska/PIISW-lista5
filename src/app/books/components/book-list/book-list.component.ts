import { Component } from '@angular/core';
import { Book } from '../../model/book';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  books: Book[];
  search : any;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly router: Router, private readonly bookService: BooksService) {
    this.books = this.activatedRoute.snapshot.data['books'];
    this.search = this.activatedRoute.snapshot.queryParams["search"];
  }


  valueChange() {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { search: this.search },
        queryParamsHandling: 'merge'
    });
    this.bookService.getAllBooks(this.search).subscribe(
      b => this.books = b
    );
  }
}
