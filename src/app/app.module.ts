import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from   '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ValidationinreactiveFormComponent } from './validationinreactive-form/validationinreactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    UserFormComponent,
    ReactiveFormComponent,
    ValidationinreactiveFormComponent
  ],
  imports: [
    BrowserModule , FormsModule , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
