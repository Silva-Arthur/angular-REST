import { Injectable, NgModule } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {

  constructor() { }

  processaError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido';

    if (error.error instanceof ErrorEvent) {
      console.error(error.error);
      errorMessage = 'Error: ' + error.error.error;
    } else {
      errorMessage = 'Codigo: ' + error.error.code + '\nMenssagem: ' + error.error.error;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token') !== null) {
      const token = 'Bearer ' + localStorage.getItem('token');

      const tokenRequest = req.clone({
        headers: req.headers.set('Authorization', token)

      });

      return next.handle(tokenRequest).pipe(catchError(this.processaError));
    } else {
      return next.handle(req);
    }
  }
}

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true,
  },
  ],
})

export class HttpInterceptorModule {

}
