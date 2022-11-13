import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { RequestLogin } from "../models/RequestLogin";
import { ResponseLogin } from './../models/ResponseLogin';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {}

    public login(requestLogin: RequestLogin): Observable<ResponseLogin> {
        return this.http.post<ResponseLogin>('http://localhost:8080/api/login', requestLogin );
    }

}