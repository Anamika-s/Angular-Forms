import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-validationinreactive-form',
  templateUrl: './validationinreactive-form.component.html',
  styleUrls: ['./validationinreactive-form.component.css']
})
export class ValidationinreactiveFormComponent implements OnInit {
  signUpForm  : FormGroup;
  FirstName : string="";
  LastName : string="";
  Email : string ="";
  Password : string ="";

  constructor(private fb : FormBuilder) {
    this.signUpForm = fb.group(
      {
        FirstName: new FormControl("", [Validators.required, Validators.minLength(10)]),
        LastName: new FormControl("", [Validators.required, Validators.minLength(10)]),
        Email : new FormControl("",[Validators.required, Validators.minLength(10)]),
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
