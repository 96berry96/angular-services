import { Component, Inject } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { USER_TOKEN } from '../../app.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(@Inject(USER_TOKEN) private userService: UserService){}
  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  CreateNewUser(){
    this.userService.CreateUser(this.name, this.gender, this.subType, this.status);
    
  }
}
