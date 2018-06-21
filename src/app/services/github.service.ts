import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'bfc27d55917bf2494692';
  private client_secret = '2b0e43868d9923697cb6b8eb4a49be0838225fa0';

  constructor(private _http: Http) {
  }

  GetUser() {
    return this._http.get('https://api.github.com/users/' + this.username +
    '?client_id=' + this.client_id + '&client_secret='+this.client_secret)
      .pipe(map(res => res.json()));
  }

  GetRepos() {
    return this._http.get('https://api.github.com/users/' + this.username +
      '/repos?client_id=' + this.client_id + '&client_secret='+this.client_secret)
      .pipe(map(res => res.json()));
  }

  UpdateUser(username: string) {
    this.username = username;
  }
}
