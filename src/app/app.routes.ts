import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dynamic-routing/home/home.component';
import { HomePageComponent } from './observable/home-page/home-page.component';
import { LoginComponent } from './observable/login/login.component';
import { AuthGuard } from './auth.guard';
import { HttpClientComponent } from './http-client/http-client.component';
import { DashboardComponent } from './observable/dashboard/dashboard.component';
import { ProfileComponent } from './observable/dashboard/profile/profile.component';
import { SettingsComponent } from './observable/dashboard/settings/settings.component';

// Define routes
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', 
    loadComponent: () => import('./observable/home-page/home-page.component').then(m => m.HomePageComponent),
    canActivate: [AuthGuard], },
  { path: 'login', component: LoginComponent },
  {   
    path: 'dashboard', 
    loadComponent: () => import('./observable/dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },

  { path: 'users',component: HttpClientComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  // { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // Add more routes here
  {
  path:'admin',
  loadChildren: ()=> import('./admin/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}
