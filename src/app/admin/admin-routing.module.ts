import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { PersonalMoreComponent } from './personal-more/personal-more.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal',
    pathMatch: 'full', // Ensures the full path `/admin` matches for redirection
  },
  {
    path: 'personal',
    component: PersonalComponent,
  },
  
  { path: '**', redirectTo: 'personal' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
