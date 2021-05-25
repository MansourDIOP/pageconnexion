import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnexionComponent } from './connexion/connexion.component';
import { CreerCompteComponent } from './creer-compte/creer-compte.component';
import { MotDePasseOublieComponent } from './mot-de-passe-oublie/mot-de-passe-oublie.component';
import { AdministrationComponent } from './administration/administration.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { FinanceComponent } from './finance/finance.component'
import { UpdateUserComponent } from './update-user/update-user.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path : '',
    component : ConnexionComponent
  },
  {
    path : 'register',
    component : CreerCompteComponent
  },

  {
    path : 'admin',
    component : AdministrationComponent
  },
  {
    path : 'etudiants',
    component : EtudiantsComponent
  },
  {
    path : 'formateurs',
    component : FormateursComponent
  },
  {
    path : 'finances',
    component : FinanceComponent
  },
  {
    path : 'forget',
    component : MotDePasseOublieComponent
  },
  {
    path : 'update',
    component : UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
