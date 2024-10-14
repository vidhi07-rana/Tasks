import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dynamic-routing/home/home.component';
import { AboutComponent } from './dynamic-routing/about/about.component';
import { HttpClientComponent } from './http-client/http-client.component';

// Define routes
export const routes: Routes = [
  { path: 'users', component: HttpClientComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  // { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // Add more routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}
