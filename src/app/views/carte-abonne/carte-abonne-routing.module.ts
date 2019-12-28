// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Project imports
import { CarteAbonneComponent } from './carte-abonne.component';
const routes: Routes = [
  {
    path: '',
    component: CarteAbonneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteAbonneRoutingModule {}
