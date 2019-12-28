// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project imports

import { ModifierCarteAbonneComponent } from './modifier-carte-abonne.component';
import { ModifierCarteAbonneRoutingModule } from './modifier-carte-abonne-routing.module';

@NgModule({
  declarations: [ModifierCarteAbonneComponent],
  imports: [CommonModule, ModifierCarteAbonneRoutingModule],
  exports: [ModifierCarteAbonneComponent]
})
export class ModifierCarteAbonneModule {}
