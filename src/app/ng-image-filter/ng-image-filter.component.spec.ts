import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgImageFilterComponent } from './ng-image-filter.component';

describe('NgImageFilterComponent', () => {
  let component: NgImageFilterComponent;
  let fixture: ComponentFixture<NgImageFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgImageFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgImageFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
