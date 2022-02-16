import { Component, OnInit } from '@angular/core';
// import { FormGroup,FormControl,Validators } from '@angular/forms';
 import { FormGroup,FormBuilder,Validators } from '@angular/forms';

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

  // user = {name:'',pwd:''};
//   myGroup={}

//   constructor() { }

//   ngOnInit() {
//      this.myGroup=new FormGroup({
//        'name':new FormControl(this.user.name,[Validators.required,Validators.minLength(4)]),
//        'pwd':new FormControl(this.user.pwd,[Validators.required,Validators.minLength(6)])
//      })
//   }
// get name(){
//   return this.myGroup.get('name')
// }
//  onSubmit(){
//     console.log(this.myGroup.valid); 
//     console.log(this.myGroup.value);
//     // alert(this.user)
//   }

//FormBuilder
userForm:FormGroup;
constructor(private fb:FormBuilder) {
  this.userForm=fb.group({
    name:['zjr',Validators.required],
    pwd:['111111',Validators.minLength(6)],
    //多级group
    address: fb.group({ 
      street: 'road 207', 
      city: 'shanghai' 
    }) 
  })
}
forceReset() { 
  this.userForm.reset(); 
} 
defaultReset() { 
  this.userForm.reset({ 
    name: 'Tim', 
    pwd: '123456', 
    address: { 
    street: 'road 207', 
    city: 'shanghai' 
  } 
 }); 
}
onSubmit(){
  console.log(this.userForm.valid);
  console.log(this.userForm.value)//{name:'zjr',pwd:'111111'}
}

ngOnInit() {}


}
