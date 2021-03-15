import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AddPost} from '../app/add-post/post'
import {Post} from '../app/home/Post'
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class LoginSeviceService {
  apiurl = "https://truly-contacts.herokuapp.com/api"
  posturl="http://localhost:4000"
  isLogin = false;
  constructor(private httpClient: HttpClient) {}

  PostDetails() {
    return this.httpClient.get<Post[]>(this.posturl+'/posts');
  }
  saveDetails(data: any) {
    return this.httpClient.post(this.apiurl +'/auth/login', data);
  }
  RegisterDetails(data: any) {
    return this.httpClient.post(this.apiurl +'/auth/register', data);
  }
  Addpost(data: any) {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.httpClient.post(this.posturl + '/posts', body,{'headers':headers})
  }
  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    console.log(loggedIn)
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  logout(){

  }

  deleteDetails(id: any) {
    return this.httpClient.delete(`${this.posturl + '/posts'}/${id}`);
  }
  getCurrentDetails(id: any) {
    return this.httpClient.get(`${this.posturl + '/posts'}/${id}`);
  }
  updateDetails(id: any, data: any) {
    return this.httpClient.put(`${this.posturl + '/posts'}/${id}`, data);
  }
  // savelogin(data:any){//   return this.httpClient.post(this.url,data)// }
}
