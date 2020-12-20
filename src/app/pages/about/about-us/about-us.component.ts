import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  userList: Array<User>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private async getUsers(): Promise<void> {
    this.userList = await this.usersService.getUsers().toPromise();
  }
}
