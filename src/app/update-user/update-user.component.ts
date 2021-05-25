import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router'

import { CreerCompteService } from '../Services/creer-compte.service'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  email = new FormControl('', [Validators.required,
    Validators.email]);

  constructor(private _update: CreerCompteService, private _router: Router) { }
  registerUserData = {
    nom:this._update.updateInfo.nom,
    prenom: this._update.updateInfo.prenom,
    email : this._update.updateInfo.email,
    profil : this._update.updateInfo.profil
    
  };
  
  ngOnInit(): void {
  }
  
  updateUser(){
    if (confirm('Voulez-vous bien modifier cette utilisateur ?') == true) {
      this._update.updateUser(this.registerUserData).subscribe((res) => {
        console.log(res)
        this._router.navigate(['/admin'])
      });
    }
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Ce champs ne peut pas être vide';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
