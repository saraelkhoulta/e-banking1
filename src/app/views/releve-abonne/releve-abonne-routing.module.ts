// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Project imports
import { ReleveAbonneComponent } from './releve-abonne.component';

const routes: Routes = [
  {
    path: '',
    component: ReleveAbonneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleveAbonneRoutingModule {}
