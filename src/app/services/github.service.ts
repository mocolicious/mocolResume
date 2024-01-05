import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  githubURL = 'https://api.github.com'

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get(this.githubURL + '/users/' + environment.githubName)
  }

  getRepos() {
    return this.http.get(`${this.githubURL}/users/${environment.githubName}/repos?sort=created&per_page=50`);
  }
}
