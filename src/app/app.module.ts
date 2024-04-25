import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnComponent } from './inn/inn.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { Form1Component } from './form1/form1.component';
import { DatePipe } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    InnComponent,
    ProfileEditorComponent,
    Form1Component,
    ResumeComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
