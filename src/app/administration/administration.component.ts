import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service'
// import { UsersRecuperationService } from '../Services/users-recuperation.service'

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  tutorials: any;
  allUsers : any;
  
  constructor(private _auth : AuthService) { }
  ngOnInit(): void {
  }
  
  Users(){
    this._auth.fetchUsers()
    .subscribe(
      (res: any) => {
        this.allUsers = res
        console.log(res)
      },
      (err: any) => console.log(err)
    )
  }
}
