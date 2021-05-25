import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  selectedUsers:any = Users;
  usersInfo: Users[] | any;

  private _registerUrl = "http://localhost:3000/api/login";

  private _allUserUrl = "http://localhost:3000/api/allUser";

  private _delUserUrl = "http://localhost:3000/api";

  private _updateUserUrl = "http://localhost:3000/api/Update";


  constructor(private http: HttpClient) { }

  registerUser(user: any){
    return this.http.post<any>(this._registerUrl, user)
  }

  fetchUsers(){
    return this.http.get(this._allUserUrl)
  }

  delUser(_id: string){
    return this.http.delete(this._delUserUrl + `/${_id}`)
  }

  updateUser(emp: Users){
    return this.http.put(this._updateUserUrl + `/${emp._id}`, emp)
  }

}
