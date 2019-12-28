// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project imports
import { CompteAbonneRoutingModule } from './compte-abonne-routing.module';
import { CompteAbonneComponent } from './compte-abonne.component';

@NgModule({
  declarations: [CompteAbonneComponent],
  imports: [CommonModule, CompteAbonneRoutingModule],
  exports: [CompteAbonneComponent]
})
export class CompteAbonneModule {}
