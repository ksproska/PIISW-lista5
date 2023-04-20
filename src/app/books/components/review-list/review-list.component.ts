import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Review} from "../../model/review";

@Component({
  selector: 'bs-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent {

  reviews: Review[];

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.reviews = this.activatedRoute.snapshot.data['reviews'];
  }
}
