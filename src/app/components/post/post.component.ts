import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  @Input()
  post: Post
  postComments: Comment[] = []

  constructor(private postService: PostService) { }


  getComments(id: string){
    this.postService.getPostComments(id).subscribe(value => this.postComments = value)
  }


  hideComments() {
    this.postComments = []
  }
}
