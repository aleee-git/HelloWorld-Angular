import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginResponse } from '../other/interfases';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    // Importar servicio de angular - default
    private _http: HttpClient
  ) { }

  api_url: string = 'http://192.168.1.110';

  login(user: string, password: string): Observable<LoginResponse> {

    password = btoa(password);

    return this._http.post<LoginResponse>(`${this.api_url}/auth/login`, {
      user: user,
      password: password
    });

  };

}
