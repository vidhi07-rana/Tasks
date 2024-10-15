import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dynamic-routing/home/home.component';
import { HomePageComponent } from './observable/home-page/home-page.component';
import { LoginComponent } from './observable/login/login.component';
import { AuthGuard } from './auth.guard';
import { HttpClientComponent } from './http-client/http-client.component';

// Define routes
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent,  canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  { path: 'users',component: HttpClientComponent },
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
