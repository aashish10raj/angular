import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private snac:MatSnackBar) { }

  ngOnInit(): void {
  }
  btnClick(){
    console.log("btn click");
    this.snac.open("Hi welcome to Employee Management application", "Ok")
  }
}
