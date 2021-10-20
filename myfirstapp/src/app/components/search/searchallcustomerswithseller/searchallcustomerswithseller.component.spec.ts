import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchallcustomerswithsellerComponent } from './searchallcustomerswithseller.component';

describe('SearchallcustomerswithsellerComponent', () => {
  let component: SearchallcustomerswithsellerComponent;
  let fixture: ComponentFixture<SearchallcustomerswithsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchallcustomerswithsellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchallcustomerswithsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
