import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { TestComponent } from './views/test/test.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },

  {
    path: 'test',
    component: TestComponent,
    data: {
      title: 'test Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'users',
        loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'client',
        loadChildren: () => import('./views/client/client.module').then(m => m.ClientModule)
      },
      {
        path: 'Comptes',
        loadChildren: () => import('./views/Comptes/Comptes.module').then(m => m.ComptesModule)
      },
      {
        path: 'Home',
        loadChildren: () => import('./views/Home/Home.module').then(m => m.HomeModule)
      },
      {
        path: 'Contrats',
        loadChildren: () => import('./views/Contrats/Contrats.module').then(m => m.ContratsModule)
      },
      {
        path: 'Offres',
        loadChildren: () => import('./views/Offres/Offres.module').then(m => m.OffresModule)
      },
      {
        path: 'Prelevement',
        loadChildren: () => import('./views/Prelevement/Prelevement.module').then(m => m.PrelevementModule)
      },
      {
        path: 'agences',
        loadChildren: () => import('./views/agences/agences.module').then(m => m.AgencesModule)
      },

      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'liste',
        loadChildren: () => import('./views/compte-abonne/compte-abonne.module').then(m => m.CompteAbonneModule)
      },
      {
        path: 'releve/:id',
        loadChildren: () => import('./views/releve-abonne/releve-abonne.module').then(m => m.ReleveAbonneModule)
      },
      {
        path: 'carte/:id',
        loadChildren: () => import('./views/carte-abonne/carte-abonne.module').then(m => m.CarteAbonneModule)
      },
      {
        path: 'updateCarte/:id',
        loadChildren: () => import('./views/modifier-carte-abonne/modifier-carte-abonne.module').then(m => m.ModifierCarteAbonneModule)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
