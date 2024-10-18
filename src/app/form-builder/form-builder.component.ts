import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent  {
  personalForm: FormGroup; // Define the form group

  constructor(private fb: FormBuilder) {
    this.personalForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
    });
  }


  onSubmit() {
    if (this.personalForm.valid) {
      console.log('Form Data:', this.personalForm.value);
    } else {
      console.log('Form is invalid');
    }
    this.personalForm.reset()
  }
}