import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Post} from '../../models/Post';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userPosts: Post[] = []

  @Input()
  user: User


  constructor(private userService: UserService) { }

  getAllPosts(id: number){
    this.userService.getUsersPost(id).subscribe(value => this.userPosts = value)
  }

  hidePosts() {
    this.userPosts = []
  }
}
