import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SearchComponent } from './components/search/search.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './components/service/search.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchallcustomerswithsellerComponent } from './components/search/searchallcustomerswithseller/searchallcustomerswithseller.component';
import {MatTableModule} from '@angular/material/table';
import { DeleteComponent } from './components/delete/delete.component';
import { AddcustomerComponent } from './components/addcustomer/addcustomer.component';
import { UpdatecustomerComponent } from './components/updatecustomer/updatecustomer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SearchfilterPipe } from './searchfilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    SearchallcustomerswithsellerComponent,
    DeleteComponent,
    AddcustomerComponent,
    UpdatecustomerComponent,
    SearchfilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    Ng2SearchPipeModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
    
  ],
  providers: [MatSnackBar, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
