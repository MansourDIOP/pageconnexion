import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service'
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import { UsersRecuperationService } from '../Services/users-recuperation.service'

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  title = 'gestionUtilisateur';
  allUsers : any;
  constructor(private _auth : AuthService,
              private _router: Router,private _users : UsersRecuperationService ){}
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
      (res: any) => {
        console.log(res)
        localStorage.setItem('token', res.token)
        if (res.profil == 'Etudiant') {
          this._router.navigate(['/etudiants'])
        }else if (res.profil == 'Formateur'){
          this._router.navigate(['/formateurs'])
        }else if (res.profil == 'Finance') {
          this._router.navigate(['/finances'])
        }else if (res.profil == 'Administrateur'){
          this._router.navigate(['/admin'])
        }
      },
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
