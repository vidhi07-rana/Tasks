import { createReducer, on } from '@ngrx/store';
import { setFormValue } from './form.actions'; 

export interface FormState {
    formValue: string; 
}

const initialState: FormState = {
    formValue: '' 
};

export const formReducer = createReducer(
    initialState,
    on(setFormValue, (state, { value }) => ({ ...state, formValue: value }))
);
