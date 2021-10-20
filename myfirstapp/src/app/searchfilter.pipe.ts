import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(customer:any, searchvalue:string): any {
    if(!customer || !searchvalue){
      return customer;
    }
    return customer.filter((cust:any)=>cust.name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()));

  }

}
