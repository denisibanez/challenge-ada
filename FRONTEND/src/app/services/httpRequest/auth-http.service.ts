import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthHttpService {
    constructor(private http: HttpClient) {}

    authService(payload: any) {
        return this.http.post(`${environment.BASE_PATH}login/`, payload);
    }
}
