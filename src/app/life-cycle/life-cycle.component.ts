import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked, 
     AfterViewInit, AfterViewChecked, OnDestroy,SimpleChanges, Input } from '@angular/core';


@Component({
selector: 'app-lifecycle',
// templateUrl: './life-cycle.component.html',
template:`
   <div>
      <div style="font-size:30px">生命周期：</div>
      <p>
        <button (click)="changes()">changes</button>
        <button (click)="destroy()">destroy</button>
        <button (click)="init()">init</button>
      </p>
      <div *ngIf="flag">
         <app-lifecycle-child [count]=count></app-lifecycle-child>
      </div>
    </div>`,
styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {
count = 0;
flag = true;
changes() {
  this.count ++;
}
destroy(){
 this.flag = false; 
}
init(){
 this.flag = true; 
}

constructor() { }

ngOnInit(): void {
  
}

}


@Component({
selector: 'app-lifecycle-child',
template:`
        <div>
            
            <input type="text" [(ngModel)]="count">
            <p>count: {{count}}</p>
        </div>
        <hr>
`
})
export class LifecycleChildComponent implements OnChanges, OnInit,DoCheck,
AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy { 
@Input() count:any;
constructor() { }
ngOnChanges(changes: SimpleChanges): void {
   console.log('changes...', changes);
}
ngOnInit() {
   console.log('init...');
}
ngOnDestroy(): void {
   console.log("destory...");
}

ngDoCheck(): void {
   console.log("check...");
}

ngAfterViewInit(): void {
   console.log("afterViewInit...");
}
ngAfterContentChecked(): void {
   console.log("afterContentChecked...");
}

ngAfterContentInit(): void {
   console.log("afterContentInit...");
}
ngAfterViewChecked(): void {
   console.log("afterViewChecked...");
}}
