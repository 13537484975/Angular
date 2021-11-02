import { Component, OnInit } from '@angular/core';
// 引入发送ajax的库
import { HttpClient, HttpErrorResponse,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  // templateUrl: './http-client.component.html',
  // styleUrls: ['./http-client.component.css']
  template: `
              <div style="font-size:30px">使用httpclient库请求真实数据：</div>
              <ul>
                  <li *ngFor="let res of results">
                      {{ res.name }} -- {{ res.age }}
                  </li>
              </ul>
              <hr>
          `
})
export class HttpClientComponent implements OnInit {
  results:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      // GET请求不带参数
      // let url = 'http://localhost/user';
      // this.http.get(url).subscribe(data=>{//subscribe处理返回数据
      //    this.results = data;//取数据
      // },error=>{
      //   console.error('出错了...');
      // });

      // GET请求带参数：{num:'2',name:'Tim'}
      // get 传参两种形式，一种写在 url 地址后边，另外一种使用 params 属性定义参数。
      // let url = 'http://localhost/user/add?num=2';
      // let user = {name:'Tim'};
      // this.http.get(url,{params: user}).subscribe(data=>{
      // console.log(data);
      // });
      
      //post请求
      let url = 'http://localhost/user/update';
      let user = {name:'Tim'};
      this.http.post(url,user, {params:new HttpParams().set('id','1')}).subscribe(data=>{
        console.log(data);
      });

      //读取完整的响应 用来判断
      //  this.http.get(url, {observe: 'response'}).subscribe(data=>{
      //      console.log(data,data.body);
      //      this.results = data.body;
      //   },(err: HttpErrorResponse) => {
      //       if (err.error instanceof Error) {
      //             console.log('客户端出错:', err.error.message);
      //        } else {
      //             console.log(`服务器返回码 ${err.status}, 返回 html: ${err.error}`);
      //        }
      //   });
  }
}

