import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruct',
  templateUrl: './instruct.component.html',
  styleUrls: ['./instruct.component.css']
})
export class InstructComponent implements OnInit {
  citys=['shanghai','beijing','hangzhou']
  fruits = [
              {id:1, name:'apple'},
              {id:2, name:'bananer'},
              {id:3, name:'orange'}
           ];
  char="B"
  cssObj={'font-size':'40px','color':'pink'}
  constructor() { }

  ngOnInit(): void {
  }

}
