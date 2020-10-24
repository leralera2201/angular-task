import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {DataTransferService} from '../../services/data-transfer.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private dataTransfer: DataTransferService) {
    console.log(history.state)
    this.activatedRoute.params.subscribe(value => {
      this.userService.getUserById(value.id).subscribe(data => {
        this.user = data;
        this.dataTransfer.user.next(JSON.stringify(data))
      })
    })
  }

  ngOnInit(): void {
  }

}
