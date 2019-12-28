import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrelevementComponent } from './prelevement.component';
import { PrelevementRoutingModule } from './prelevement-routing.module';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [PrelevementComponent],
  imports: [CommonModule, PrelevementRoutingModule, FormsModule, BsDropdownModule.forRoot()]
})
export class PrelevementModule {}
