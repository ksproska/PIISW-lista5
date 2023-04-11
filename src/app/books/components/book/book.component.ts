import { Component } from '@angular/core';
import {Book} from "../../model/book";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'bs-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  readonly book: Book;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.book = this.activatedRoute.snapshot.data['books'];
  }
}
