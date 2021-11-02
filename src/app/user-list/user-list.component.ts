// 有两方式：全局注入、局部注入
import { Component, OnInit } from '@angular/core';
import { UserListService } from '../service/user.service'
import {User} from '../service/user'
@Component({
  selector: 'app-user-list',
  template:`
            <div style="font-size:30px">服务：</div>
            <ul>
               <li *ngFor="let user of users">
                   姓名：{{user.name}}，年龄：{{user.age}}
               </li>
            </ul>
            <hr>
            `
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  // 依赖注入
  constructor(private userListService: UserListService) { }
  ngOnInit() {
       this.users = this.userListService.getUsers();
  }

}
