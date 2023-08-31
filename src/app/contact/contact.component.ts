import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  fisrtname: string = ""
  lastname: string  = ""
  email: string  = ""
  cnt: string  = ""
  gend: string  = ""




  onSubmit(){
   if(this.fisrtname === "" || this.lastname === "" || this.email==="" || this.cnt==="" ){
    alert("Your Detials Not Complete.")
   }
   else{
    alert(`Thank you ${this.fisrtname} ${this.lastname}. We will contact you as soon as possible.`)
   }
  }
 


}
