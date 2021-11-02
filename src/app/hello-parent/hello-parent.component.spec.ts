import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloParentComponent } from './hello-parent.component';

describe('HelloParentComponent', () => {
  let component: HelloParentComponent;
  let fixture: ComponentFixture<HelloParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
