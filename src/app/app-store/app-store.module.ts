import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formReducer } from '../form.reducer';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ form: formReducer }), // Register your reducer here

  ]
})
export class AppStoreModule { }
