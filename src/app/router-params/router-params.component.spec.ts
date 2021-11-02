import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterParamsComponent } from './router-params.component';

describe('RouterParamsComponent', () => {
  let component: RouterParamsComponent;
  let fixture: ComponentFixture<RouterParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
