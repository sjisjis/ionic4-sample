import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.page.html',
  styleUrls: ['./github.page.scss'],
})
export class GithubPage implements OnInit {
  users:any = [];
  next: number = 0;

  constructor(
    private githubService: GithubService
  ) {
    this.getUserList();
  }

  ngOnInit() {
  }


  doInfinite(infiniteScrollEvent) {
    this.getUserList();
    infiniteScrollEvent.target.complete();
  }

  getUserList() {
    this.githubService.getUsers(this.next).subscribe(data => {
      if(this.next === 0) {
        this.users = data;
        } else {
        Object.values(data).map(_ => this.users.push(_));
      }
      this.next = Object.values(data).slice(-1)[0].id;
    },err => {
      console.log(err);
    });
  }
}
