import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../app/home/Post'
@Injectable({ providedIn: 'root' })
export class LoginSeviceService {
  apiurl = "https://saitharun.herokuapp.com/api"
  posturl="http://localhost:4000"

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
  // deleteDetails(id: any) {
  //   return this.httpClient.delete(`${this.apiurl}/${id}`);
  // }
  // getCurrentDetails(id: any) {
  //   return this.httpClient.get(`${this.apiurl}/${id}`);
  // }
  // updateDetails(id: any, data: any) {
  //   return this.httpClient.put(`${this.apiurl}/${id}`, data);
  // }
  // savelogin(data:any){//   return this.httpClient.post(this.url,data)// }
}
