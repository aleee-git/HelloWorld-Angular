import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (
    private _user: UserService,
    private _api: ApiService
  ) { }

  login() {
    const user = (document.querySelector('#user') as HTMLInputElement).value;
    const password = (document.querySelector('#password') as HTMLInputElement).value;

    this._api.login(user, password).subscribe(response => {
      if(response.success) {
        this._user.userr = response.user;
        console.log('holi');
        console.log(this._user.userr);
      }
    });
  }

}
