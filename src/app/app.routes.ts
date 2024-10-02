import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlacesComponent } from './places/places.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'places', component: PlacesComponent },
];
