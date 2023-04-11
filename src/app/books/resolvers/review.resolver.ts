import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {Review} from "../model/review";
import {BooksService} from "../services/books.service";

@Injectable({
  providedIn: 'root'
})
export class ReviewResolver implements Resolve<Review[]> {
  constructor(private readonly booksService: BooksService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Review[]> {
    return this.booksService.getAllReviewsForBook(route.paramMap.get('id'));
  }
}
