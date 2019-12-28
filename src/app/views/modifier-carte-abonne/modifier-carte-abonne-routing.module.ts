// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Project imports

import { ModifierCarteAbonneComponent } from './modifier-carte-abonne.component';
const routes: Routes = [
  {
    path: '',
    component: ModifierCarteAbonneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifierCarteAbonneRoutingModule {}
