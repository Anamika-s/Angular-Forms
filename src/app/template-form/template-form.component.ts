 
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
   n1 : number =0;
   n2 : number =0;
   result : number =0;

  Add(refForm : any)
{
  // console.log(refForm.controls);
  // console.log(refForm.value);
  this.n1 = refForm.controls.txtNo1.value;
  console.log(this.n1);
  this.n2 = refForm.controls.txtNo2.value;
  console.log(this.n2);

 this.result=  this.n1 + this.n2;
 console.log(this.result);
 refForm.controls.txtResult.value = this.result;
  

console.log("Form is submitted");
}  constructor() { }

  ngOnInit(): void {
  }

}
