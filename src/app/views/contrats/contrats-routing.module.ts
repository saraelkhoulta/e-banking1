import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContratsComponent } from './contrats.component';

const routes: Routes = [
  {
    path: '',
    component: ContratsComponent,
    data: {
      title: 'contrat'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratsRoutingModule {}
