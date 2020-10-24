import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'https://jsonplaceholder.typicode.com/'

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url + 'users')
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(this.url + `users/${id}`)
  }

  getUsersPost(id: number): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url + `posts?userId=${id}`)
  }


}
