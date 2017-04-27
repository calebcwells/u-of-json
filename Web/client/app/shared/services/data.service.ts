import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    get(url: string, params?: any): Observable<Response> {
        return this.http.get(url).map(
            (res: Response) => {
                return res;
            }).catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'server error');
    }

}