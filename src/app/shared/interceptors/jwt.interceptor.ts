import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JWTAuthInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const TOKEN_QORE = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJxdWltaXZlbnRhIiwiaGFtYmllbnRlIjoicHJkIiwieWVhciI6IjIwMTkiLCJzdXBwb3J0Ijoid3d3LnF1aW1pY2FzdWl6YS5jb20ifQ.aivnszuHEsXVxM1BWUy4uHhbS46DN2l7JzZw1DirVYAdh54Oj5owBq_9CV_cMStpRhy0YCgwYE4gaZP3yDP1gRiy-iJUgfsTNmrVtCF9BEjPCT4iSnDKNxrRRxCqMOJPvodlGJF8qIMn3SvlFqI8Do4zDQmhu8krxN4eDeVhyCJkgNiuTHFvFGu85eEDzEMjyVcNVuXeUSV8BIz14gCfwE52BFisCeoJiOByMY5E1vssZmxH3EdyueobdvSkh1y3fHWYHEGgqrcVR5XpvErYydobHL_oU8xGf5GRxNPL-1APz-sQsScFNPsZ1mPYdejT3xdA5up6p4BTNjPIAZQwFA';
        const AUTH_HEADERS = {
            'Access-Control-Allow-Origin': '*',
            Authorization_App: TOKEN_QORE,
            Authorization_User: TOKEN_QORE,
        };

        req = req.clone({
            setHeaders: AUTH_HEADERS,
        });

        return next.handle(req);
    }
}
