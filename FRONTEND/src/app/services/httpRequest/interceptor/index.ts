import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorAuth } from './success-interceptor';
import { HttpInterceptorError } from './error-interceptor';

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorAuth,
        multi: true,
    },

    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorError,
        multi: true,
    },
];
