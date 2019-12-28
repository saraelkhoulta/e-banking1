import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffresComponent } from './offres.component';
import { OffresRoutingModule } from './offres-routing.module';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [OffresComponent],
  imports: [CommonModule, OffresRoutingModule, FormsModule, BsDropdownModule.forRoot()]
})
export class OffresModule {}
