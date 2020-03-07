import { Http } from './common/http';

export class Users {
    private _http: Http;
    constructor() {
        this._http = new Http();
    }

    public async all() {        
        return await this._http.get('users');
    }
}