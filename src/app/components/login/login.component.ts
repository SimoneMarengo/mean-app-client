import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  form: FormGroup;

  email = () => this.form.get('email');
  password = () => this.form.get('password');

  constructor(
    private _router: Router,
    private _authService: AuthService,
    _formBuilder: FormBuilder
  ) {
    this.form = this.createForm(_formBuilder);
  }

  ngOnInit(): void {
  }

  createForm(_formBuilder: FormBuilder): FormGroup {
    return _formBuilder.group({
      email: new FormControl('',/* Validators.compose([
        Validators.required,
        Validators.email
      ])*/),
      password: new FormControl('',/* Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ])*/)
    });
  }

  triggerHide(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.hide = !this.hide;
  }

  onSubmit() {
    this._authService.login(this.form.value);
  }
}
