// 编写一个 uer.service 服务，来提供用户的数据
import { Injectable } from '@angular/core';
import {User} from './user'
@Injectable()
export class UserListService {
    // 模拟数据，前端就是ajax获取数据
    users:User[]=[
        {name:'zhangsan',age:10}, 
        {name:'lisi',age:20},
        {name:'tom',age:30}
    ];
    // 返回用户
    getUsers():User[]{
        return this.users;
    }
}