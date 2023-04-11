import { Component } from '@angular/core';
import {Book} from "../../model/book";
import {ActivatedRoute} from "@angular/router";
import {Review} from "../../model/review";

@Component({
  selector: 'bs-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  readonly book: Book;
  readonly reviews: Review[];

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.book = this.activatedRoute.snapshot.data['book'];
    this.reviews = this.activatedRoute.snapshot.data['reviews'];
  }
}
