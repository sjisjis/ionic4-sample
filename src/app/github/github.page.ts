import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.page.html',
  styleUrls: ['./github.page.scss'],
})
export class GithubPage implements OnInit {
  users:any = [];

  constructor(
    private githubService: GithubService
  ) {
    this.getUserList();
  }

  ngOnInit() {
  }

  getUserList() {
    this.githubService.getUsers().subscribe(data => {
      this.users = data;
    },err => {
      console.log(err);
    });
  }
}
