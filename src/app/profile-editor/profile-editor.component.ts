import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.scss',
  
})

export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(),
    }),
  });
  userDetails: {firstName: string, lastName: string, address: {street: string, city: string, state: string, zip: number}} = {
    firstName: 'Swastika',
    lastName: 'Verma',
    address: {
      street: 'K67/63',
      city: 'Varanasi',
      state: 'UP',
      zip: 221001
    }
  }

  ngOnInit() {
    console.log(this.profileForm)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.profileForm.patchValue(this.userDetails)
  }

}


