import { Component } from '@angular/core';
import {CustomerService} from './services/CustomerService';
import {customer} from './models/customer';

@Component({
    selector:'app-root-customer',
    templateUrl:'./app.customer-comp.html',
    styleUrls: ['./app.component.css']
})
export class CustomerComponent{

customer:customer;

constructor(private cusservice:CustomerService){
}

findCustomer(cid:number) {
    this.cusservice.findCustomer(cid).
    subscribe( 
      (x:any) => {
        this.customer = x;
         console.log(customer);
      }
    );
  }

}