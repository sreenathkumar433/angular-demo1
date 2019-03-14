import { Injectable } from '@angular/core';

interface Person {
    name:String,
    gender:String,
    profession:String;
  }
  @Injectable({
    providedIn: 'root'
  })
  export class PersonService {

    personList : Person[] = [  
    { 
      name:'sreenadh',
      gender:'male',
      profession:'software'
   },
   { name:'lakshmi',
      gender:'female',
      profession:'housewife'
   },
   { name:'dad',
      gender:'male',
      profession:'farmer'
   },
   { name:'mom',
      gender:'female',
      profession:'housewife'
   }
  
   ]
}