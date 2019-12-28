import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptesComponent } from './comptes.component';
import { ComptesRoutingModule } from './comptes-routing.module';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [ComptesComponent],
  imports: [CommonModule, ComptesRoutingModule, FormsModule, BsDropdownModule.forRoot()]
})
export class ComptesModule {}
