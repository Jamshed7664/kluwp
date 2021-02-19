import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {
  errormssg:any;
  constructor(private route:Router){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenId=localStorage.getItem('authToken');
    if(tokenId){
      req=req.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenId}`
        }
      });
    }
    return <any>next.handle(req).pipe(

      catchError((error: HttpErrorResponse) => {
if(error){
  console.log(error);

}
        return throwError(error);
      })
    )
  }
}
