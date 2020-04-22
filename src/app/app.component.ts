import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-app-client';

  constructor(private _router: Router) {}

  gotoLogin() {
    this._router.navigateByUrl('/login');
  }
  gotoRegistration() {
    this._router.navigateByUrl('/registration');
  }
  gotoHomepage() {
    this._router.navigateByUrl('/homepage');
  }
}
