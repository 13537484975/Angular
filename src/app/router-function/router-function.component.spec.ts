import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterFunctionComponent } from './router-function.component';

describe('RouterFunctionComponent', () => {
  let component: RouterFunctionComponent;
  let fixture: ComponentFixture<RouterFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
