import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  get(endpoint: string) {
    const url = environment.apiUrl + endpoint;
    console.log('LoginService: Fetching data from endpoint:', url);
    return this.http.get(url);
  }
}