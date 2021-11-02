import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  imageUrl="https://www.imooc.com/static/img/index/logo2020.png"

  hello(){
    alert("hello zjr")
  }

  show(event:any){
    console.log(event);
    console.log(event.target);
    // console.log(event.target.value);
  }
  changValue(e:any){
     this.num=e.target.value
  }

  show2(text:any){
     console.log(text);
     
  }

  Text="6"
  num="5"
  
  constructor() { }

  ngOnInit(): void {
  }

}
