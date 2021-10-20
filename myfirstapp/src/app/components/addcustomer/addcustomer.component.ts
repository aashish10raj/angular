import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service'; 
import {  Router} from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  customer={
    
    "name":"",
    "email":"",
    "expenditure":"",
    seller:{
      "id":""
  }
  }
  parentData="";
customers:any;
 errmsg:any; 
horizontalPosition: MatSnackBarHorizontalPosition = 'start';
verticalPosition: MatSnackBarVerticalPosition = 'bottom';
flag=false;
  constructor(private add:SearchService, private snak:MatSnackBar, private router:Router) { }
  
  
  ngOnInit(): void {
    
}
doSubmitForm()
{
  this.flag=true;
  this.parentData=this.customer.name;
console.log("try to submit form");
console.log("DATA ",this.customer);
this.add.addCustomer(this.customer).subscribe(
  response=>{
    console.log(response);   
    this.flag=false; 
    this.snak.open("Send Success ","OK",{
      horizontalPosition: 'center',
      verticalPosition: 'top',

    }); 
    //this.router.navigate([''])
  },
  error=>{
    console.log(error); 
  this.errmsg=error;
    this.flag=false; 
    this.snak.open(this.errmsg.error, "OK",{
      panelClass: ["custom-style"],
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });   
  }
)  
}


sendData(data:any){
  alert('hello ' + data);
}

}
