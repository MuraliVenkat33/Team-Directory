import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../../model/team.model';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private apiUrl = 'https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098';

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }
}
