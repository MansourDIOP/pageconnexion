import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';//Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {CdkTableModule} from '@angular/cdk/table';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';//Requetes Http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthService } from './Services/auth.service';
import { CreerCompteService } from './Services/creer-compte.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreerCompteComponent } from './creer-compte/creer-compte.component';
import { MotDePasseOublieComponent } from './mot-de-passe-oublie/mot-de-passe-oublie.component';
import { AdministrationComponent } from './administration/administration.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { FinanceComponent } from './finance/finance.component'

// import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
// import {GoogleLoginProvider} from 'angularx-social-login';

import { from } from 'rxjs';
import { UpdateUserComponent } from './update-user/update-user.component';
const modules = [
  MatSliderModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatDialogModule,
  CdkTableModule];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    CreerCompteComponent,
    MotDePasseOublieComponent,
    AdministrationComponent,
    FormateursComponent,
    EtudiantsComponent,
    FinanceComponent,
    UpdateUserComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // SocialLoginModule,
    // GoogleLoginProvider, 
    modules
  ],
  providers: [AuthService,CreerCompteService
    // {//Login with google
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           '768574763579-e0ji2kr944pdtf8m6gapj2rp3cr488b6.apps.googleusercontent.com'
    //         )
    //       }
    //     ]
    //   } as SocialAuthServiceConfig,
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
