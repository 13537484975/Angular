//1.自定义指令
// import { Directive,ElementRef } from '@angular/core';

// //选择器
// @Directive({
//     selector: '[Hightlight]',//可以是.class #id tag [属性]
// })
// export class custmInstruction { 
//     //注入ElementRef对象
//     constructor(private el:ElementRef){
//         //el.nativeElement就是Dom节点
//         el.nativeElement.style.background='yellow'
//     }
// }


//2.自定义背景颜色
// import { Directive,ElementRef,Input,OnInit } from '@angular/core';

// @Directive({
//     selector: '[Hightlight]',
// })
// export class custmInstruction implements OnInit { 
//     @Input() Hightlight:any;

//     constructor(private el:ElementRef){
//     }

//     ngOnInit(){
//        if(this.Hightlight===''){
//            this.el.nativeElement.style.background='yellow';
//        }else{
//            this.el.nativeElement.style.background=this.Hightlight;
//        }
//     }

// }

//3.事件控制颜色显示
import { Directive,ElementRef,Input,OnInit,HostListener } from '@angular/core';

@Directive({
    selector: '[Hightlight]',
})
export class custmInstruction { 
    @Input() Hightlight:any;

    constructor(private el:ElementRef){
    }

    //监听 mouseover事件名 onMouseover方法名
    @HostListener('mouseover') onMouseover(){
        if(this.Hightlight===''){
            this.el.nativeElement.style.background='yellow';
        }else{
            this.el.nativeElement.style.background=this.Hightlight;
        }
    }
    @HostListener('mouseout') onMouseout(){
        this.el.nativeElement.style.background=null;
    }

}