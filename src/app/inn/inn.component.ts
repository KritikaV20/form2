import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-inn',
  templateUrl: './inn.component.html',
  styleUrl: './inn.component.scss'
})
export class InnComponent {
  [x: string]: any;
  name = new FormControl('');
  
  
  ngOnInit() {
    console.log(this.name);
  }

  updateName() {
    this.name.setValue('Kritika Verma');
  }
  
}


