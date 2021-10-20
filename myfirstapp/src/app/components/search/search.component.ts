import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
// data={
//   id:"",
//   name:"",
//   expenditure:"",
//   email:""
// }
customers:any;
  constructor(private search:SearchService) { }

  ngOnInit(): void {
  }

  doSearch(){
    console.log("trying to submit form");  
    //console.log(this.data);
    this.search.searchCustomer().subscribe((response)=>this.customers=response
      // response=>{
      //   //console.log(response);
        
      // },
      // error=>{
      //   console.log(error);
        
      // }
    )
    //console.log(response);
    
    
  }
}
