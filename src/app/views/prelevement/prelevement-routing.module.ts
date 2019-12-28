import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrelevementComponent } from './prelevement.component';

const routes: Routes = [
  {
    path: '',
    component: PrelevementComponent,
    data: {
      title: 'prelevement'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrelevementRoutingModule {}
