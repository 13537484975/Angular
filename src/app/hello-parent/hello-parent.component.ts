import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
//父子件
@Component({
  selector: 'app-hello-parent',
  template:`
          <div style="font-size: 28px;">父子组件的传值：</div>
          <br>
          <div class="parent">子->父触发事件count:{{count}}</div>
          <br>
          <app-name-child [name]="name" [age]="age" (myclick)="add()"></app-name-child>
        `,
  // templateUrl: './hello-parent.component.html',
  styleUrls: ['./hello-parent.component.css']
})
export class HelloParentComponent implements OnInit {
  name="zjr"
  age="20"

  count=0
  add(){
    this.count++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

//子组件
@Component({
  selector: 'app-name-child',
  template:`
              <div>父->子传值{{name}}--{{age}}</div>
              <br>
              <button (click)="childAdd()">子组件</button>
            
              <hr>
          `
})
export class HelloChildComponent implements OnInit {
  @Input() name:any;
  // @Input('num') myNum:any;@Input('外部传过来的') myNum:any 、 myNum自定的  使用{{myNum}} 命名冲突时自己定义
  @Input() age:any;

  @Output() myclick=new EventEmitter();//获取自定义事件
  childAdd(){
    this.myclick.emit();//向外触发myclick自定义事件
    // this.myclick.emit(88);//payload 传参 也叫载荷
    // 父组件用$event接收<app-name-child [name]="name" [age]="age" (myclick)="add($event)"></app-name-child>
    // add(n){console.log(n) this.count++;}
  }
  
  constructor() { }

  ngOnInit(): void { }
}
