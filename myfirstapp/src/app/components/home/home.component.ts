import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchService } from '../service/search.service';
import { Event, Router, NavigationStart, NavigationEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customers: any;
  customer = {
    "id": "",
    "name": "",
    "email": "",
    "expenditure": "",
    seller: {
      "id": ""
    }
  }

  // popoverTitle:string ='Are you sure want to delete this entry';
  // popoverMessage:string='You will not be able to recover it';
  // cancelClicked:boolean=false;
  showLoadingIndicator = true;
  constructor(private snac: MatSnackBar, private list: SearchService, private snak: MatSnackBar, private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }

    });
  }
  deleteMessage = false;
  searchTerm!: string;
  isupdated = false;
  searchvalue!: string;
  term!: string;
 
  
  ngOnInit(): void {
    console.log("trying to display the list");
   
    this.list.searchCustomer().subscribe((response) => this.customers = response
      // response=>{
      //   //console.log(response);

      // },
      // error=>{
      //   console.log(error);

      // }
      
    )
  }

  btnClick() {
    console.log("btn click");
    this.snac.open("Hi welcome to Employee Management application", "Ok")
    
  }

  doDelete(id: number) {
      
    this.list.deleteCustomer(id).subscribe(data => {
      console.log("trying to delete");
      this.deleteMessage = true;
      this.list.searchCustomer().subscribe(data => {
        this.customers = data
      })

    },
      error => console.log(error));
  }

  // doUpdate(id:number){
  //   this.list.updateCustomer(id).subscribe(response=>{
  //     console.log(response);   

  //     this.snak.open("Update Success ","OK")  
  //   },
  //   error=>{
  //     console.log(error); 

  //     this.snak.open("ERROR!! ","OK")   
  //   }
  // )  
  // }
  doList(id: number) {
    this.list.getCustomer(id)
      .subscribe(
        data => {
          this.customers = data;

        },
        error => console.log(error));
  }

  changeisUpdate() {
    this.isupdated = false;
  }
  doUpdate(id: number) {
    this.list.updateCustomer(id, this.customers).subscribe(
      data => {
        this.isupdated = true;
        this.list.searchCustomer().subscribe(data => {
          this.customers = data
        })
      },
      error => console.log(error));

  }
  doDeleteWithPopUp(id: number) {
    Swal.fire({

      title: 'Are you sure want to remove?',

      text: 'You will not be able to recover this file!',

      icon: 'warning',

      showCancelButton: true,

      confirmButtonText: 'Yes, delete it!',

      cancelButtonText: 'No, keep it'

    }).then((result) => {

      if (result.value) {
        this.list.deleteCustomer(id).subscribe(data => {
          console.log("trying to delete");
          this.deleteMessage = true;
          this.list.searchCustomer().subscribe(data => {
            this.customers = data
          })

        },
          error => console.log(error));

        Swal.fire(

          'Deleted!',

          'Your data has been deleted.',

          'success'

        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {

        Swal.fire(

          'Cancelled',

          'Your data is safe :)',

          'error'

        )

      }

    })




  }

}
