import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapItemLaptopComponent } from './baitap-item-laptop.component';

describe('BaitapItemLaptopComponent', () => {
  let component: BaitapItemLaptopComponent;
  let fixture: ComponentFixture<BaitapItemLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapItemLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapItemLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
