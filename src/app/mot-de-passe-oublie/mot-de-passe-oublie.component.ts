import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../Services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-mot-de-passe-oublie',
  templateUrl: './mot-de-passe-oublie.component.html',
  styleUrls: ['./mot-de-passe-oublie.component.css']
})
export class MotDePasseOublieComponent implements OnInit {
  registerUserData = {
   email : "mindset@example.com",    
  };
  constructor(private _auth : AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required,
    Validators.email]);

    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    forget(){
      this._auth.forgetPassword(this.registerUserData)
      .subscribe(
        (res: any) => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/'])
        },
        (err: any) => console.log(err)
      )
    }
}
