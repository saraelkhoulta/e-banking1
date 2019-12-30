// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project imports

import { ModifierCarteAbonneComponent } from './modifier-carte-abonne.component';
import { ModifierCarteAbonneRoutingModule } from './modifier-carte-abonne-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModifierCarteAbonneComponent],
  imports: [CommonModule, ModifierCarteAbonneRoutingModule,FormsModule],
  exports: [ModifierCarteAbonneComponent]
})
export class ModifierCarteAbonneModule {}
