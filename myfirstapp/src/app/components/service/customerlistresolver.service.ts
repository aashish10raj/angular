import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchallcustomerswithsellerComponent } from '../search/searchallcustomerswithseller/searchallcustomerswithseller.component';
import { SearchService } from './search.service';
import { SearchallcustomerswithsellerService } from './searchallcustomerswithseller.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerlistresolverService implements Resolve<any> {
  constructor(private list:SearchallcustomerswithsellerService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
return this.list.searchAllCustomer();

  }


}
