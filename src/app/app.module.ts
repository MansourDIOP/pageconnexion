import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';//Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';//Requetes Http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthService } from './Services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreerCompteComponent } from './creer-compte/creer-compte.component';
import { MotDePasseOublieComponent } from './mot-de-passe-oublie/mot-de-passe-oublie.component';
import { AdministrationComponent } from './administration/administration.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { FinanceComponent } from './finance/finance.component'

const modules = [
  MatSliderModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatDialogModule];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    CreerCompteComponent,
    MotDePasseOublieComponent,
    AdministrationComponent,
    FormateursComponent,
    EtudiantsComponent,
    FinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    modules
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
