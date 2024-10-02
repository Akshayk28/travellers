import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from './home/home.component';
import { FooterComponent } from "./footer/footer.component";
import { PlacesComponent } from './places/places.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, PlacesComponent, RouterOutlet, RouterLink, RouterLinkActive, HttpClientModule]
})
export class AppComponent {
  title = 'traveller';
}
