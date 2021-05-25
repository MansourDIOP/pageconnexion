import { Component, OnInit } from '@angular/core';
import { CreerCompteService } from '../Services/creer-compte.service'
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent{
  registerUserData = {
    nom:"",
    prenom: "",
    email : "",
    profil : ''
    
  };
  email = new FormControl('', [Validators.required,
     Validators.email]);
     
  constructor(private _auth: CreerCompteService,
              private _router: Router) { }
              

  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      (res: any) => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/admin'])
      },
      (err: any) => console.log(err)
    )
  }
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Ce champs ne peut pas être vide';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
}
