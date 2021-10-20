import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchallcustomerswithsellerService {
  private baseurl:string="http://localhost:9091/customers?fetchSeller=true"
  constructor(private http:HttpClient) { }

  searchAllCustomer(){
    return this.http.get(`${this.baseurl}`)
   }
}
