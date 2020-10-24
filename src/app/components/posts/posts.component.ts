import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post[] = []

  constructor(private postService: PostService) {
    this.getPosts()
  }

  getPosts(){
    this.postService.getPosts().subscribe(value => this.posts = value)
  }
}
