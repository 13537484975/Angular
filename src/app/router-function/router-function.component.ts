import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-router-function',
  templateUrl: './router-function.component.html',
  styleUrls: ['./router-function.component.css']
})
export class RouterFunctionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  helloUrl(){
    // this.router.navigateByUrl('hello')
    this.router.navigate(['hello'],{queryParams:{id:2,a:3,b:4}})
    // this.router.navigateByUrl('hello/routerparams/12') 路由传参
    // this.router.navigateByUrl(['hello/routerparams','12']) 与上一一样

    // this.router.navigateByUrl('hello',{skipLocationChange:true}) 页面跳转但路由不发生变化
  }

}
