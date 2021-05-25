import { Component, OnInit } from '@angular/core';
// import { UsersRecuperationService } from '../Services/users-recuperation.service'
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router'
import { CreerCompteService } from '../Services/creer-compte.service'

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'],
  providers: [AuthService]

})

export class AdministrationComponent implements OnInit {

  myList:any

  constructor(public usersService: AuthService, private _update: CreerCompteService, private _router: Router) { }
  ngOnInit(): void {
    this.refreshEmployeeList()
  }

  refreshEmployeeList() {
    this.usersService.fetchUsers().subscribe((res) => {
      this.myList= res
      console.log(this.myList)
    });

    // document.getElementById("thead")?.style.display = 'block'
  }

  creatAccount(){
    this._router.navigate(['/register'])
  }
  
  updateUser(emp: any){
    this._update.updateInfo = emp
    this._router.navigate(['/update'])
  }
  
  delUser(_id: string) {
    if (confirm('Voulez-vous bien supprimer cette utilisateur ?') == true) {
      this.usersService.delUser(_id).subscribe((res) => {
        this.refreshEmployeeList();
        // this.resetForm(form);
        // M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
