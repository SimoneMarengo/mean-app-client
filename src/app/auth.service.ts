import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './models/user';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    API_URL: string = 'http://localhost:8888';
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    currentUser = {};

    constructor(
        private _httpClient: HttpClient,
        public _router: Router
    ) { }

    register(user: User): Observable<any> {
        return this._httpClient
            .post(`${this.API_URL}/users/registration`, user)
            .pipe(
                catchError(this.handleError)
            )
    }

    login(user: User) {
        return this._httpClient
            .post<any>(`${this.API_URL}/users/login`, user)
            .subscribe(
                (res: any) => {
                    localStorage.setItem('access_token', res.token)
                    this.getUserProfile(res._id)
                        .subscribe(
                            res => {
                                this.currentUser = res;
                                this._router.navigate(['/homepage' + res.msg._id]);
                            },
                            err => {
                            });
                },
                err => { }
            );
    }

    getAccessToken() {
        return localStorage.getItem('access_token');
    }

    isLoggedIn(): boolean {
        let authToken = localStorage.getItem('access_token');
        return (authToken !== null) ? true : false;
    }

    logout() {
        if (localStorage.removeItem('access_token') == null) {
            this._router.navigate(['users/login']);
        }
    }

    getUserProfile(id): Observable<any> {
        return this._httpClient
            .get(`${this.API_URL}/users/profile/${id}`, { headers: this.headers })
            .pipe(
                map((res: Response) => {
                    return res || {}
                }),
                catchError(this.handleError)
            );
    }

    handleError(error: HttpErrorResponse) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        } else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(msg);
    }
}