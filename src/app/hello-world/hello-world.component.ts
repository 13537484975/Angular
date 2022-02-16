import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void { 
     this.route.queryParams.subscribe((res)=>{
       console.log(res)//获取传过来的参数 （函数式路由跳转）
    })
  }
   
}
