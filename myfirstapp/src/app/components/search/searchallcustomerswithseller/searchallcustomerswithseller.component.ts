import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchallcustomerswithsellerService } from '../../service/searchallcustomerswithseller.service';


@Component({
  selector: 'app-searchallcustomerswithseller',
  templateUrl: './searchallcustomerswithseller.component.html',
  styleUrls: ['./searchallcustomerswithseller.component.css']
})
export class SearchallcustomerswithsellerComponent implements OnInit {
customers:any;
  constructor(private search:SearchallcustomerswithsellerService, private router:Router, private route:ActivatedRoute) { 
    this.route.snapshot.data['customer'];
    this.search.searchAllCustomer().subscribe((response)=>this.customers=response)
  }
  
  ngOnInit(): void {
  }
  // doSearchAll(){
  //   console.log("trying to submit form");  
    
  //   this.search.searchAllCustomer().subscribe((response)=>this.customers=response
  //     // response=>{
  //     //   console.log(response);
        
  //     // },
  //     // error=>{
  //     //   console.log(error);
        
  //     // }
  //   )
    
  // }
}
