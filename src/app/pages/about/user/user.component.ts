import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/interfaces';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userData: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.getUserInfo(params.userId));
  }

  private async getUserInfo(userId: number): Promise<void> {
    this.userData = await this.usersService.getUser(userId).toPromise();
  }
}
