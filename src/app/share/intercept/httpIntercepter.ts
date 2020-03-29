import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AppConstant } from '../appconstant/appconstant';
import { LoadingController } from '@ionic/angular';
import { map, catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoadingService } from '../services/loader/loader.service';
@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  loaderActive = false;
  constructor(public loadingController: LoadingController,
              private loadingService: LoadingService) {}
   intercept(request: HttpRequest<any>, next: HttpHandler) {
     if (!this.loaderActive) {
        this.loadingService.loadingPresent();
        this.loaderActive = true;
    }
     const Appurl = AppConstant.ApiUrlLocal + request.url ;
     request = request.clone({ url: Appurl });

     return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loaderActive = true;
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('http_Config_catch_error', error);
        if (error.status === 401) {
          localStorage.clear();
          window.location.reload();
         }
        return throwError(error);
      }),
      finalize(() => {
        this.loadingService.loadingDismiss();
        this.loaderActive = false;
      })
    );
  }
}
