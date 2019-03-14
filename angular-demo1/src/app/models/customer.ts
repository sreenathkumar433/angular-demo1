
export class customer {

    customerId: number;
    firstname:string;
    lastname:string;
    phoneNo:String;
    email:String;
   
   constructor(id:number, fname:string, lname:string, email:string, phone:string){
       this.customerId=id;
       this.firstname=fname;
       this.lastname=lname;
       this.email=email;
       this.phoneNo=phone;
   }


}