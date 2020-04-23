import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class TestService {

    APIDashboard = "localhost:8888/api/"

    constructor(
        private _http: Http
    ) { }

    pingTest() {
        const headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');

        this._http
            .post('http://localhost:8888/ping', {
                headers: headers
            })
            .subscribe(
                data => {
                    console.log(data);
                },
                err => {

                }
            );
    }

}