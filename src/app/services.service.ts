import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {Post} from '../app/home/Post'

@Injectable({ providedIn: 'root' })
export class LoginSeviceService {
  apiurl = "https://truly-contacts.herokuapp.com/api"
  posturl="http://localhost:4000"
  isLogin = false;
  constructor(private httpClient: HttpClient,    private toastr: ToastrService) {}
  handleError(error: HttpErrorResponse) {
    var errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = "Internal server Error"
    } else {
      // Server-side errors
      errorMessage = "invalid credentials"
    }
  // this.toastr.warning(errorMessage)
   window.alert(errorMessage)
  //  this.toastr.success(errorMessage)
    return throwError(errorMessage);

    
  }
  showSuccess() {
    this.toastr.success("invalid credentiasl");
  }
  PostDetails() {
    return this.httpClient.get<Post[]>(this.posturl+'/posts').pipe(catchError(this.handleError));;
  }
  saveDetails(data: any) {
    return this.httpClient.post(this.apiurl +'/auth/login', data).pipe(catchError(this.handleError));;
  }
  RegisterDetails(data: any) {
    return this.httpClient.post(this.apiurl +'/auth/register', data).pipe(catchError(this.handleError));;
  }
  Addpost(data: any) {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    // console.log(body)
    return this.httpClient.post(this.posturl + '/posts', body,{'headers':headers}).pipe(catchError(this.handleError));
  }
  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    // console.log(loggedIn)
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }


  deleteDetails(id: any) {
    return this.httpClient.delete(`${this.posturl + '/posts'}/${id}`).pipe(catchError(this.handleError));
  }
  getCurrentDetails(id: any) {
    return this.httpClient.get(`${this.posturl + '/posts'}/${id}`).pipe(catchError(this.handleError));
  }
  updateDetails(id: any, data: any) {
    return this.httpClient.put(`${this.posturl + '/posts'}/${id}`, data).pipe(catchError(this.handleError));
  }

}
