import { createAction, props } from '@ngrx/store';

export const setFormValue = createAction(
  '[Form] Set Form Value',
  props<{ value: string }>() // Adjust type as needed
);
