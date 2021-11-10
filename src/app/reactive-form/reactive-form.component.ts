import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signUpForm  : FormGroup;
  FirstName : string="";
  LastName : string="";
  Email : string ="";
  Password : string ="";

  constructor(private fb : FormBuilder) {
    this.signUpForm = fb.group(
      {
        FirstName: new FormControl(),
        LastName: new FormControl(),
        Email : new FormControl(),
        Password : new FormControl() 
      }
    );
  
   }
   PostData(signUpForm :any)
   {
     console.log("Form Submitted");
     console.log(signUpForm.controls.FirstName.value);
   }
  ngOnInit(): void {
  }

}
