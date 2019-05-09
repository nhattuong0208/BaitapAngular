import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapContentPhoneComponent } from './baitap-content-phone.component';

describe('BaitapContentPhoneComponent', () => {
  let component: BaitapContentPhoneComponent;
  let fixture: ComponentFixture<BaitapContentPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapContentPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapContentPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
