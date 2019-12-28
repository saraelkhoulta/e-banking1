import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencesComponent } from './agences.component';

const routes: Routes = [
  {
    path: '',
    component: AgencesComponent,
    data: {
      title: 'uagences'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencesRoutingModule {}
