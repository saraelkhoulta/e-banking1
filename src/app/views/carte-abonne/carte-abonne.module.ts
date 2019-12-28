// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project imports

import { CarteAbonneComponent } from './carte-abonne.component';
import { CarteAbonneRoutingModule } from './carte-abonne-routing.module';

@NgModule({
  declarations: [CarteAbonneComponent],
  imports: [CommonModule, CarteAbonneRoutingModule],
  exports: [CarteAbonneComponent]
})
export class CarteAbonneModule {}
