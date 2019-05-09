import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapItemPhoneComponent } from './baitap-item-phone.component';

describe('BaitapItemPhoneComponent', () => {
  let component: BaitapItemPhoneComponent;
  let fixture: ComponentFixture<BaitapItemPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapItemPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapItemPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
