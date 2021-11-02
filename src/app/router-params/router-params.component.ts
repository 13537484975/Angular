
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-router-params',
  template: `
            <div>参数是：{{id}}</div>
   `
})
export class RouterParamsComponent implements OnInit, DoCheck {
  id:any;
  constructor(private route: ActivatedRoute, private router: Router ) {}
  
  ngOnInit() {
  }

  ngDoCheck(): void {
      this.id = this.route.snapshot.paramMap.get('id');
  }}
