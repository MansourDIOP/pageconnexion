import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/login";

  private _allUserUrl = "http://localhost:3000/api/allUser";

  constructor(private http: HttpClient) { }

  registerUser(user: any){
    return this.http.post<any>(this._registerUrl, user)
  }

  fetchUsers(){
    return this.http.get(this._allUserUrl)
  }
}
