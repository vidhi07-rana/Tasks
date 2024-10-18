import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore, StoreModule } from '@ngrx/store';
import { formReducer } from './app/form.reducer';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppStoreModule } from './app/app-store/app-store.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [    provideStore({ form: formReducer }), // Ensure this is correctly set
    
    provideRouter(routes), provideHttpClient(),
    provideStore(),        


],
}).catch(err => console.error(err));
