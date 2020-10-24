import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {DataTransferService} from '../../services/data-transfer.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = []
  user: User

  constructor(private userService: UserService, private dataTransfer: DataTransferService) {
    this.userService.getUsers().subscribe(value => this.users=value)
    this.user = this.dataTransfer.user.getValue()

  }


}
