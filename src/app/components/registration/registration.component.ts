import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide = true;

  form: FormGroup;

  email = () => this.form.get('email');
  password = () => this.form.get('password');
  usernaem = () => this.form.get('username');

  constructor(
    private _authService: AuthService,
    private _router: Router,
    _formBuilder: FormBuilder
  ) {
    this.form = this.createForm(_formBuilder);
  }

  ngOnInit(): void {
  }

  createForm(_formBuilder: FormBuilder) {
    return _formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]))
    });
  }

  triggerHide(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.hide = !this.hide;
  }

  onSubmit() {
    this._authService
      .register(this.form.value)
      .subscribe(
        res => {
          if (res.result) {
            this.form.reset()
            this._router.navigate(['login']);
          }
        })
  }

}
