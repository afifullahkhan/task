import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }


  getUser(params?:any){

  return this.http.get(`https://reqres.in/api/users?page=${params.page}&per_page=${params.perPage}`)
  }
}
