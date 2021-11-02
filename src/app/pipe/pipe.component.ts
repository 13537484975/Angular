import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  birthday = new Date(2021,10,11);
  flag = true;
  get format(){
     return this.flag ? 'yyyy-MM-dd' : 'yyyy/MM/dd'; 
  }
  toggle(){
     this.flag = !this.flag;
   }
  constructor() { }

  ngOnInit(): void {
  }

}
