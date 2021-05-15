import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-mot-de-passe-oublie',
  templateUrl: './mot-de-passe-oublie.component.html',
  styleUrls: ['./mot-de-passe-oublie.component.css']
})
export class MotDePasseOublieComponent implements OnInit {
  registerUserData = {
   email : "mindset@example.com",    
  };
  constructor() { }

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
}
