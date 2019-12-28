// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project imports

import { ReleveAbonneRoutingModule } from './releve-abonne-routing.module';
import { ReleveAbonneComponent } from './releve-abonne.component';

@NgModule({
  declarations: [ReleveAbonneComponent],
  imports: [CommonModule, ReleveAbonneRoutingModule],
  exports: [ReleveAbonneComponent]
})
export class ReleveAbonneModule {}
