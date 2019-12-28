import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComptesComponent } from './comptes.component';

const routes: Routes = [
  {
    path: '',
    component: ComptesComponent,
    data: {
      title: 'comptes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComptesRoutingModule {}
