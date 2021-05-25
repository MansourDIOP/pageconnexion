import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreerCompteService {
updateInfo: any;
  private _registerUrl = "http://localhost:3000/api/register";

  private _updateUserUrl = "http://localhost:3000/api/Update";

  constructor(private http: HttpClient) { }

  registerUser(user: any){
    return this.http.post<any>(this._registerUrl, user)
  }

  updateUser(updateInfo: any){
    return this.http.put(this._updateUserUrl + `/${updateInfo._id}`, updateInfo)
  }
}
