import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersRecuperationService {
  private _baseUrl = 'http://localhost:3000/api/allUser';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this._baseUrl);
  }
  
}
