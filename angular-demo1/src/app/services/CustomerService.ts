import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CustomerService {

    public static base_url ="http://localhost:8080/";

    
    constructor(private httpclient:HttpClient) {}

    findCustomer(id:number) {
        return this.httpclient.get(CustomerService.base_url+
            "customers/find-by-id/"+id);
    }



}