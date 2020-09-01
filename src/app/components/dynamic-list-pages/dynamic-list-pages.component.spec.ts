import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicListPagesComponent } from './dynamic-list-pages.component';

describe('DynamicListPagesComponent', () => {
  let component: DynamicListPagesComponent;
  let fixture: ComponentFixture<DynamicListPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicListPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicListPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
