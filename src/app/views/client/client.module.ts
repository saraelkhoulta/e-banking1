import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [ClientComponent],
  imports: [CommonModule, ClientRoutingModule, FormsModule, BsDropdownModule.forRoot()]
})
export class ClientModule {}
