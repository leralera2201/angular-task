import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Post} from '../../models/Post';
import {User} from '../../models/User';

@Component({
  selector: 'app-reactive-select',
  templateUrl: './reactive-select.component.html',
  styleUrls: ['./reactive-select.component.css']
})
export class ReactiveSelectComponent implements OnInit {

  message: string

  user: User

  posts: Post[] = []
  users: User[] = []

  form: FormGroup
  formSelect: FormGroup
  name: FormControl = new FormControl('',
    [
      Validators.required,
      Validators.minLength(5),
      (control: AbstractControl) => {
        if (control.value.includes('fuck')) {
          return {badWord: true}
        }
        return null
      }
    ])

  select: FormControl = new FormControl()


  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users = value)
    this.form = new FormGroup({name: this.name})
    this.formSelect = new FormGroup({select: this.select})
  }

  getUserById() {
    this.userService.getUserById(this.select.value).subscribe(value => this.user = value)
  }

  ngOnInit(): void {
  }

  getAllPosts() {
    console.log(this.form)
    this.posts = []
    let neededUser = this.users.filter(el => el.name === this.name.value)
    if (neededUser.length > 0) {
      this.userService.getUsersPost(neededUser[0].id).subscribe(value => this.posts = value)
    } else {
      this.message = 'There is no user with this name'
    }

  }
}
