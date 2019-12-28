import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencesComponent } from './agences.component';
import { AgencesRoutingModule } from './agences-routing.module';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [AgencesComponent],
  imports: [CommonModule, AgencesRoutingModule, FormsModule, BsDropdownModule.forRoot()]
})
export class AgencesModule {}
