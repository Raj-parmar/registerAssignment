import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { take, map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from 'src/app/features/authentication/services/auth.service'
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root',
})
export class HttpConfigInterceptor implements HttpInterceptor {
  alert: any;
  i=1;
  constructor(private auth: AuthService, private _snackBar: MatSnackBar,private router: Router, private cService: CommonService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.i++;
    if(this.i > 1){
      this.cService.isLoading.next(true);
    }
    // const token = this.auth.getToken();
    // // if (token) {
    // //   req = req.clone({ headers: req.headers.set('authorization','Bearer '+token) });
    // // }
    // // if (req.method === 'GET') {
    // //   req = req.clone({
    // //     headers: req.headers.set('Content-Type', 'application/json'),
    // //   });
    // }
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    return this.newFunction(next, req);
  }

  private newFunction(next: HttpHandler, req: HttpRequest<any>) {
    return next.handle(req).pipe(
      finalize(
        () => {
          this.i--;
          if(this.i == 1){
            this.cService.isLoading.next(false);
          }
        }
      ),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // this.auth.removeToken();
          //   this._snackBar.open(error.error.message, '', {
          //     duration: 2000,
          //     panelClass:'fail',
          //     horizontalPosition:'center',
          //     verticalPosition:'top'
          //   });
          //   setTimeout(() => {
          //     window.location.href = '/auth/login';
          //   }, 2000);
        }
        return throwError(error);
      })
    );
  }
}
