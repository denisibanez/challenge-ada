import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorError implements HttpInterceptor {
    constructor(public router: Router) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // console.log('error interceptor')

        return next.handle(request).pipe(
            catchError((err) => {
                // console.log(err, 'err')
                if (err.status === 403 || err.status === 401) {
                    localStorage.removeItem('TOKEN_CHALLENGE');
                    location.replace('/login');
                }
                return throwError(() => err);
            })
        );
    }
}
