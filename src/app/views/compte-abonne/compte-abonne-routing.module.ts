// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Project imports
import { CompteAbonneComponent } from './compte-abonne.component';
const routes: Routes = [
  {
    path: '',
    component: CompteAbonneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteAbonneRoutingModule {}
