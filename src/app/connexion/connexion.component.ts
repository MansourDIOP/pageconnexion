import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service'
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  title = 'gestionUtilisateur';
  constructor(private _auth : AuthService ){}
  registerUserData = {
    email : "pat@example.com",
    password : 'password'
  };
  hide = true;

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required,
    Validators.email]);

  registersUsers(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err)
    )
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Ce champs est obligatoire';
    }

    return this.email.hasError('email') ? 'email invalide' : '';
  }

}
