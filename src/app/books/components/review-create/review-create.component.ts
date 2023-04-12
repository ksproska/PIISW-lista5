import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BooksService} from "../../services/books.service";
import {Review} from "../../model/review";
import {Book} from "../../model/book";
import {Location} from '@angular/common';

@Component({
  selector: 'bs-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss']
})
export class ReviewCreateComponent {
  readonly review: Review;
  readonly book: Book;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly booksService: BooksService,
    private _location: Location
  ) {
    this.book = this.activatedRoute.snapshot.data['book'];
    this.review = {
      id: -1,
      forBook: Number(this.activatedRoute.snapshot.paramMap.get("id")),
      title: "",
      description: "",
      rate: 0
    }
    booksService.getAllReviews().subscribe(
      r => this.review.id = r.length + 1
    )
  }

  onSubmit() {
    this.booksService.saveReview(this.review).subscribe();
    this._location.back();
  }
}
