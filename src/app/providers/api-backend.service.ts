import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiBackendService {

  constructor(
    public http: HttpClient
  ) { }

  //CREATE
  post<T>(url: string, objeto: any) {
    return this.http.post<T>(environment.url + url, objeto, {
      headers: new HttpHeaders().set('Content-Type','application/json'),
    });
  }

  //READ
  get<T>(url: string) {
    return this.http.get<T>( environment.url + url);
  }

  //UPDATE
  put<T>(url: string, objeto: any) {
    return this.http.put<T>(environment.url + url, objeto, {
      headers: new HttpHeaders().set('Content-Type','application/json'),
    });
  }

  //DELETE
  delete<T>(url: string, id: string) {
    return this.http.delete<T>(environment.url + url + id, {
      headers: new HttpHeaders().set('Content-Type','application/json'),
    });
  }

}
