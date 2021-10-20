import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseurl:string="http://localhost:9091/customers?fetchSeller=false"
  private baseUrl:string="http://localhost:9091"

  constructor(private http:HttpClient) { }

  searchCustomer(){
   return this.http.get(`${this.baseurl}`)
   
  }
  deleteCustomer(id: number){
    return this.http.delete(`${this.baseUrl}/customers/${id}`, { responseType: 'text' });
  }

  addCustomer(data:any){
    return this.http.post(`${this.baseUrl}/customers`,data);
  }

  updateCustomer(id:number, data:any){
    return this.http.put(`${this.baseUrl}/customers/${id}`,data);
  }

  getCustomer(id:number){
    return this.http.get(`${this.baseUrl}/customers/${id}`);
  }
}
