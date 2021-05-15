import { Component, OnInit } from '@angular/core';
import { CreerCompteService } from '../Services/creer-compte.service'
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent{
  registerUserData = {
    nom:"nom",
    prenom: "prenom",
    email : "email",
    profil : 'profil'
    
  };
  email = new FormControl('', [Validators.required,
     Validators.email]);
  constructor(private _auth: CreerCompteService) { }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err)
    )
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
}
