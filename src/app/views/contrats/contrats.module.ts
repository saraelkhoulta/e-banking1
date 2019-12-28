import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratsComponent } from './contrats.component';
import { ContratsRoutingModule } from './contrats-routing.module';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [ContratsComponent],
  imports: [CommonModule, ContratsRoutingModule, FormsModule, BsDropdownModule.forRoot()]
})
export class ContratsModule {}
