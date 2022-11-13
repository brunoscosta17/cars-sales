import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

import { RequestLogin } from "../models/RequestLogin";
import { ResponseLogin } from './../models/ResponseLogin';
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private http: HttpClient,
        private authService: AuthService) {}

    public login(requestLogin: RequestLogin): Observable<ResponseLogin> {
        return this.http.post<ResponseLogin>('http://localhost:8080/api/login', requestLogin )
            .pipe(
                tap((loginResponse) => this.authService.loginResponse = loginResponse)
            );
    }

}