import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchService } from '../service/search.service'; 


  

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  customers:any;
  deleteMessage=false;  
  @Input() parentData:any;

  @Output() public sendData = new EventEmitter<any>();
  constructor(private del:SearchService) { }

  ngOnInit(): void {
   
    
  }

// doDelete(id:number){
  
//   this.del.deleteCustomer(id).subscribe(data => {  
//     console.log("trying to delete");  
//     this.deleteMessage=true;  
//     this.del.searchCustomer().subscribe(data =>{  
//       this.customers =data  
//       })  

//   },
// error => console.log(error));  
// }

// doSearch(){
//   console.log("trying to submit form");  
//   //console.log(this.data);
//   this.del.searchCustomer().subscribe((response)=>this.customers=response
//     // response=>{
//     //   //console.log(response);
      
//     // },
//     // error=>{
//     //   console.log(error);
      
//     // }
//   )
//   //console.log(response);
  
  
// }
data="";
callParent(){
  this.sendData.emit(this.parentData);
}
}
