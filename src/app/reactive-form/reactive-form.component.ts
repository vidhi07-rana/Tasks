import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  form: FormGroup;


  constructor() {
    // Initialize the form with an email, password, and check FormArray
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6),   Validators.pattern(this.passwordPattern)]),
      check: new FormArray([new FormControl(false), new FormControl(false)]) 
    });
  }

  get check(): FormArray {
    return this.form.get('check') as FormArray;
  }

  get passwordPattern(): RegExp {
    return /^[a-zA-Z]{6,}$/;
  }

  addform(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      this.form.reset();
    }
  }
}
