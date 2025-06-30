import { Injectable } from "@angular/core";
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {
    constructor() {
        console.log('AuthInterceptor: Initialized');
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('AuthInterceptor: Intercepting request', req);
        // Clone the request to add the new header.
        const authReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer YOUR_TOKEN_HERE')
        });

        // Pass the cloned request instead of the original request to the next handle.
        return next.handle(authReq);
    }
}