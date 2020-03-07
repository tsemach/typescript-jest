import axios, { AxiosInstance } from 'axios';

export class Http {
    private _httpClient: AxiosInstance;
  
    constructor() {
      console.log("[http] origin http contstructoe should not be called") ;
      
      this._httpClient = axios.create({
        baseURL: 'https://reqres.in/api/',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    public async get(url: string) {
        const users = await this._httpClient.get(url);
        console.log(users.data.data);
        return users.data.data; // ugh!
    }
}