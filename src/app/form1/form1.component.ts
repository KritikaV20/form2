import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup,} from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.scss',
})
export class Form1Component {
  profileForm = this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender:['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required],

  address: this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    }),

    radiobutton: this.formBuilder.group({
      languages:['', Validators.required],
      englishText: [{value: '', disabled: true}],
      hindiText: [{value: '', disabled: true}],
      spanishText: [{value: '', disabled: true}],
    }),

    checkbutton: this.formBuilder.group({
      checkbox: new FormControl(true),
    })
  });

  object =
  {
    firstName: 'abcd',
    lastName: 'xyz',
    gender:'Female',
    // dateOfBirth: [''],
    email:'abc@gmail.com',
    password:'*****',
    address:{
      street:'123',
      city:'Varanasi',
      state:'UP',
      zip:'221001',
    }
  }

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe) {
    this.updateValue()
  }

  updateValue(){
    // this.profileForm.controls['firstName'].setValue('Swastika');
    // this.profileForm.controls['lastName'].setValue('Verma');
    // this.profileForm.controls['address'].controls['street'].setValue('123');
    // this.profileForm.controls['address'].controls['city'].setValue('Varanasi');
    // this.profileForm.controls['address'].controls['state'].setValue('UP');
    // this.profileForm.controls['address'].controls['zip'].setValue('221001');

    this.profileForm.patchValue(this.object);
    this.populateDateOfBirth();
    // this.profileForm.controls['radiobutton'].controls['languages'].setValue('English');
  }

  populateDateOfBirth(){
    const currentDate = new Date();
    console.log(currentDate)

    const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    this.profileForm.controls['dateOfBirth'].setValue(formattedDate);
    console.log(this.profileForm)
  }

  onSubmit() {
    // Form submission logic here
  }

  handleChange(e: any) {
    console.log(e)
    console.log(e.target.value)
    if (e.target.value == 'english') {
      this.profileForm.controls['radiobutton'].controls['englishText'].enable();
      this.profileForm.controls['radiobutton'].controls['hindiText'].disable();
      this.profileForm.controls['radiobutton'].controls['spanishText'].disable();
    }
    if (e.target.value == 'hindi') {
      this.profileForm.controls['radiobutton'].controls['hindiText'].enable();
      this.profileForm.controls['radiobutton'].controls['englishText'].disable();
      this.profileForm.controls['radiobutton'].controls['spanishText'].disable();
    }
    if (e.target.value == 'spanish') {
      this.profileForm.controls['radiobutton'].controls['spanishText'].enable();
      this.profileForm.controls['radiobutton'].controls['englishText'].disable();
      this.profileForm.controls['radiobutton'].controls['hindiText'].disable(); 
    }
}
}
