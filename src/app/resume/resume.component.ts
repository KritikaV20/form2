import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, NgModel, RequiredValidator, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})

export class ResumeComponent{
  resumebuilder!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialize form with one set of input fields
    this.resumebuilder = this.formBuilder.group({
      headName:['Kritika Verma'],
      location:['Varanasi'],
      contactNumber:['0000000000'],
      emailid:['abcde@gmail.com'],
      summary:['Reactive forms provide a model-driven approach to handling form inputs whose values change over time. This guide shows you how to create and update a basic form control, progress to using multiple controls in a group, validate form values, and create dynamic forms where you can add or remove controls at run time.'],
      experience:new FormArray([
        new FormGroup({
          jobTitle: new FormControl('Angular Developer'),
          employer: new FormControl('XYZ Limited'),
          city: new FormControl('Noida'),
          country: new FormControl('India'),
          startDate: new FormControl(''),
          endDate: new FormControl(''),
          aboutThisRole: new FormControl('Reactive forms provide a model-driven approach to handling form inputs whose values change over time. This guide shows you how to create and update a basic form control, progress to using multiple controls in a group, validate form values, and create dynamic forms where you can add or remove controls at run time.'),
        })
      ]),
      qualificationName: new FormArray([
        new FormGroup({
          qualification: new FormControl('B.com'),
          yearOfPassing: new FormControl('2017')
        })
      ]),
      certificationName: new FormArray([
        new FormGroup({
          certification: new FormControl('MERN, Ducat'),
          duration_from: new FormControl(''),
          duration_to: new FormControl('')
        })
      ]),
      skills:['Reactive forms provide a model-driven approach to handling form inputs whose values change over time. This guide shows you how to create and update a basic form control, progress to using multiple controls in a group, validate form values, and create dynamic forms where you can add or remove controls at run time.'],
    })
  }
  addInputFieldsQualification(){
    (this.resumebuilder.get('qualificationName') as FormArray).push(
      new FormGroup({
        qualification: new FormControl(''),
        yearOfPassing: new FormControl('')
      })
    );
  }
  addInputFieldsExperience() {
    (this.resumebuilder.get('experience') as FormArray).push(
      new FormGroup({
        jobTitle: new FormControl(''),
          employer: new FormControl(''),
          city: new FormControl(''),
          country: new FormControl(''),
          startDate: new FormControl(''),
          endDate: new FormControl(''),
          aboutThisRole: new FormControl(''),
      })
    );
  }
  addInputFieldsCertification(){
    (this.resumebuilder.get('certificationName') as FormArray).push(
      new FormGroup({
        certification: new FormControl(''),
        duration_from: new FormControl(''),
        duration_to: new FormControl('')
      })
    );
  }
  removeInputFieldsCertification(index: number) {
    const certificationFormArray = this.resumebuilder.get('certificationName') as FormArray;
      // remove it
      certificationFormArray.removeAt(index);
  }
  getControlsQualification() {
    return (this.resumebuilder.get('qualificationName') as FormArray).controls;
  }
  removeInputFieldsQualification(index: number){
    const certificationFormArray = this.resumebuilder.get('qualificationName') as FormArray;
      // remove it
      certificationFormArray.removeAt(index);
  }
  getControlsExperience() {
    return (this.resumebuilder.get('experience') as FormArray).controls;
  }
  removeInputFieldsExperience(index: number){
    const certificationFormArray = this.resumebuilder.get('experience') as FormArray;
      // remove it
      certificationFormArray.removeAt(index);
  }
  getControlsCertification(){
    return (this.resumebuilder.get('certificationName') as FormArray).controls;
  }
  onSubmit() {
  }

}




