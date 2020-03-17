import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AppConstant } from '../appconstant/appconstant';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let Appurl = AppConstant.ApiUrlLocal + request.url ;
    const authReq = request.clone({ url: Appurl });
    return next.handle(authReq);
  }
}