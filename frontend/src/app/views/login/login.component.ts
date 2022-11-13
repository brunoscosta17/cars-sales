import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/resources/services/login.service';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { ResponseLogin } from 'src/app/resources/models/ResponseLogin';
import { AlertService } from 'src/app/resources/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin = new RequestLogin();

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit(): void {
  }

  doLogin(): void {
    this.loginService.login(this.requestLogin)
      .subscribe({
        next: (data: ResponseLogin) => {
          this.router.navigate(['dashboard']);
        },
        error: (e: any) => {
          this.alertService.error(e.error.message);
        }
      });
  }

}
