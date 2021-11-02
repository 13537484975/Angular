import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // values='';
 
  // onEnter(value:any){
  //         this.values += value + ' | '; 
  //       }

  user = {name:''};

  constructor() { }

  ngOnInit(): void {
  }

}
