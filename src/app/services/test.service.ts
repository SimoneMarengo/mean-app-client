import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable({
    providedIn: 'root',
})
export class TestService {

    APIDashboard = "localhost:8888/api/"

    constructor(
        private _http: Http
    ) { }

    getAllTodos(): any {
        let url = this.APIDashboard + "todos";
        return this._http
            .get(url)
            .subscribe(
                result => {
                    if (result) { return result; }
                },
                (err: Response) => {
                    return err.toString();
                }
            )
    }

}