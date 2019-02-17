import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  public users:any = [];
  private headers: any = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(public http: HttpClient) {
  }

  getUsers(num:number = 0 ) {
    return this.http.get(`https://api.github.com/users?since=${num}`)
      .pipe(map(results => { return results }));
  }
}
