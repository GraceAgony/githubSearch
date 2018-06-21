import { Component } from '@angular/core';
import {GithubService} from "../services/github.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;
  repos: any[];
  username: string;

  constructor(private _githubService: GithubService) {
    this.user = false;
  }

  searchUser() {
    this._githubService.UpdateUser(this.username);

    this._githubService.GetUser().subscribe(user => {
      this.user = user;
    });

    this._githubService.GetRepos().subscribe(repos => {
      this.repos = repos;
    });

  }
}
