import { Component } from '@angular/core';
import {PersonService} from './services/person-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-demo1';
  name = 'sreenadha kumar gottipati';
  private client:any;

constructor(private perservice:PersonService){
   this.client = ['apple','cisco','sony','citi'];   
  }
  
 persons = this.perservice.personList; 
 
  addClient(clnt:string) {
    console.log(clnt);

    if(clnt.trim() != "")
    this.client.push(clnt);

  }
   onclick(cust){
    alert("You selected "  + cust);
}

    
}

 