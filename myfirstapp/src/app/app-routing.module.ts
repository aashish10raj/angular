import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './components/addcustomer/addcustomer.component';
import { DeleteComponent } from './components/delete/delete.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SearchallcustomerswithsellerComponent } from './components/search/searchallcustomerswithseller/searchallcustomerswithseller.component';
import { CustomerlistresolverService } from './components/service/customerlistresolver.service';
import { UpdatecustomerComponent } from './components/updatecustomer/updatecustomer.component';

const routes: Routes = [
  {
    path:"searchAllCustomer",
    component:SearchComponent,
    pathMatch:"full"    
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"searchAllCustomersWithSeller",
    component:SearchallcustomerswithsellerComponent,
    pathMatch:"full",
    resolve: {customer: CustomerlistresolverService}
  },
  {
    path:"deleteCustomer",
    component:DeleteComponent,
    pathMatch:"full"
  },
  {
    path:"addcustomer",
    component:AddcustomerComponent,
    pathMatch:"full"
  },
  {
    path:"updatecustomer/:id",
    component:UpdatecustomerComponent,
    pathMatch:"full"
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
