import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-ng-model-select',
  templateUrl: './ng-model-select.component.html',
  styleUrls: ['./ng-model-select.component.css']
})
export class NgModelSelectComponent implements OnInit {
  users: User[] = []
  user: User
  message: string

  posts: Post[]= []

  name: string = ''
  idUser: number;


  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users =value)
  }

  ngOnInit(): void {
  }

  getUserById() {
    this.userService.getUserById(this.idUser).subscribe(value => this.user = value)
  }

  getAllPosts(name: string, myForm: NgForm) {
    this.posts = []
    let neededUser =this.users.filter(el => el.name === name)
    if(neededUser.length > 0){
      this.userService.getUsersPost(neededUser[0].id).subscribe(value => this.posts = value)
    }else{
      this.message = 'There is no user with this name'
    }

  }



}
