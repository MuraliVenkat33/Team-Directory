import { Component, Input } from '@angular/core';
import { UserListService } from './user-list.service';
import { Team } from '../../model/team.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users: Team[] = [];
  searchQuery: string = '';


  constructor(private userService: UserListService, private searchService: SearchService){
  }

  ngOnInit(){

    this.searchService.searchQuery$.subscribe(query => {
      console.log(query)
      this.searchQuery = query;
    });

    this.getTeamsList();
  }

  getTeamsList(){
    this.userService.getTeams().subscribe((users) => {
      this.users = users;
    },error => {
      console.log(error)
      // We can use this section to handle Error.
    });
  }

}
