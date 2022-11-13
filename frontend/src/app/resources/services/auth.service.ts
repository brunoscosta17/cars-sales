import { Injectable } from '@angular/core';

import { ResponseLogin } from 'src/app/resources/models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginResponse: ResponseLogin = new ResponseLogin();

  clear(): void {
    this.loginResponse = new ResponseLogin();
    // this.loginResponse.jwt = '';
  }

  public isAuthenticated(): boolean {
    // return Boolean(this.loginResponse?.jwt)
    return Boolean(this.loginResponse.jwt.length !== 0)
  }

}
