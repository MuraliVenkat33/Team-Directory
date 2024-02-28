import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchQuerySubject = new BehaviorSubject<string>('');

  searchQuery$ = this.searchQuerySubject.asObservable();

  updateSearchQuery(query: string) {
    console.log(query)
    this.searchQuerySubject.next(query);
  }
}
