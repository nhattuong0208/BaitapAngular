import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapContentLaptopComponent } from './baitap-content-laptop.component';

describe('BaitapContentLaptopComponent', () => {
  let component: BaitapContentLaptopComponent;
  let fixture: ComponentFixture<BaitapContentLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapContentLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapContentLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
