import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error here
        console.log(error);
        this.handleError(error);
        return throwError(error);
      })
    );
  }

  private handleError(error: HttpErrorResponse): void {
    const errorMessage = error.error.errorDetails || 'An error occurred';
    // Display error message in a message box
    window.alert(errorMessage);
  }
}
