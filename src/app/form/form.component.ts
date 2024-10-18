import { Component, OnInit } from '@angular/core';
import { select, Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormState } from '../form.state';
import { setFormValue } from '../form.actions';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { formReducer } from '../form.reducer';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
formValue$! : Observable<string>
formsValue='';

constructor(private store : Store<{form: FormState}>){

  this.formValue$ = this.store.pipe(select(state => state.form?.formValue));
}

ngOnInit(): void {
  this.formValue$.subscribe((value) => {
      this.formsValue = value;
  });
}

onValueChange(value: string){
  this.store.dispatch(setFormValue({value}))
}
resetForm() {
  this.formsValue = ''; 
  this.store.dispatch(setFormValue({ value: '' }));  
}


submitForm(){
  console.log('Form submitted with value:', this.formsValue);

}

}
