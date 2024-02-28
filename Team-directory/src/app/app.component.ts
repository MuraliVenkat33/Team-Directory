import { Component } from '@angular/core';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Team-directory';

  constructor(private searchService: SearchService){}

  updateSearchQuery(event: any) {
    console.log(event.target.value)
    this.searchService.updateSearchQuery(event.target.value);
  }
}
