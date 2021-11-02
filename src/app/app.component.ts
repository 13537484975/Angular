// 引入ng核心包的组件
import { Component } from '@angular/core';
//注释（在ES7中叫装饰器，用来定义方法或者类的信息）
//定义模板两个方法：1使用templateUrl 2使用template+es6的模板字符串
//定义组件样式两个方法：1使用StyleUrls 2使用styles+es6的模板字符串
//@Component这块内容属于元数据
@Component({
  selector: 'app-root',//组件名称   外部使用组件:<app-root></app-root>
  templateUrl: './app.component.html',//组件模板 // template:`hello es6的模板字符串{{title}}`, 方法2
  styleUrls: ['./app.component.css']//组件的样式 //styles:[`h1{color:red}`]//styles:[`h1{color:red}`]
})
export class AppComponent {//组件名称
    title = 'Hello zjr my-app';
}
