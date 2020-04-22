import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;  // for password visibility trigger

  form: FormGroup;  // form for the login validation

  email = () => this.form.get('email');         // getter for email validators
  password = () => this.form.get('password');   // getter for password validators

  constructor(
    private _router: Router,
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

  onSubmit() {
    this._router.navigateByUrl('/homepage');
  }
}
