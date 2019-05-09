import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapHeaderComponent } from './baitap-header/baitap-header.component';
import { BaitapSlideComponent } from './baitap-slide/baitap-slide.component';
import { BaitapContentPhoneComponent } from './baitap-content-phone/baitap-content-phone.component';
import { BaitapContentLaptopComponent } from './baitap-content-laptop/baitap-content-laptop.component';
import { BaitapFooterComponent } from './baitap-footer/baitap-footer.component';
import { BaitapItemPhoneComponent } from './baitap-content-phone/baitap-item-phone/baitap-item-phone.component';
import { BaitapItemLaptopComponent } from './baitap-content-laptop/baitap-item-laptop/baitap-item-laptop.component'

@NgModule({
  declarations: [BaitapHeaderComponent, BaitapSlideComponent, BaitapContentPhoneComponent, BaitapContentLaptopComponent, BaitapFooterComponent, BaitapItemPhoneComponent, BaitapItemLaptopComponent],
  exports: [BaitapHeaderComponent, BaitapSlideComponent, BaitapContentPhoneComponent, BaitapContentLaptopComponent, BaitapFooterComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapModuleModule { }
