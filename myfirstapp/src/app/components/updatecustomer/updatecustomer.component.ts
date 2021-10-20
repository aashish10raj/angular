import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchService } from '../service/search.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
  customers:any;
  flag=false;
  //id!: number;
  // customer={
    
  //   "name":"",
  //   "email":"",
  //   "expenditure":"",
  //   seller:{
  //     "id":""
  // }
  // }
  updatedata= new FormGroup({
   id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    expenditure: new FormControl('')
  })
errmsg:any;
  constructor(private update:SearchService, private snak:MatSnackBar, private route: ActivatedRoute, private router:Router) { }
  
  ngOnInit(): void {
    
    console.log(this.route.snapshot.params.id);  
    this.update.getCustomer(this.route.snapshot.params.id).subscribe((response:any)=>
    {
      //this.customers=response
       console.log(response['name'])
      this.updatedata= new FormGroup({
        id: new FormControl(response['id']),
        name: new FormControl(response['name']),
        email: new FormControl(response['email']),
        expenditure: new FormControl(response['expenditure'])  
      })
     
    }
    
    
    )
  }
onSubmit(){
  this.flag=true;
  console.log("updating")
  this.update.updateCustomer(this.route.snapshot.params.id,this.updatedata.value).subscribe((result)=>
  {
    this.flag=false; 
    this.snak.open("Update Success ","OK")
    this.router.navigate([''])

},
error=>{
  console.log(error); 
  this.errmsg=error.
  this.flag=false; 
  this.snak.open(this.errmsg.error, "OK",{
    panelClass: ["custom-style"],
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });      
}
  )
}
  

  // doUpdate(id:number){
  //   this.update.updateCustomer(id,this.customer).subscribe(response=>{
  //     console.log(response);   
      
  //     this.snak.open("Update Success ","OK")  
  //   },
  //   error=>{
  //     console.log(error); 
        
  //     this.snak.open("ERROR!! ","OK")   
  //   }
  // )  
  // }
  // onSubmit() {
  //   console.log(this.id);
    
  //   this.doUpdate(this.id);    
  // }
}
