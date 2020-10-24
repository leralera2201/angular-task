import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url: string = 'https://jsonplaceholder.typicode.com/'

  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(this.url +'comments')
  }

  getCommentById(id: string): Observable<Comment>{
    return this.httpClient.get<Comment>(this.url +`comments/${id}`)
  }

}
