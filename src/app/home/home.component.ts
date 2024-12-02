import { Component, effect, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  selector: 'app-home',
  imports: [HeaderComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet
  ],
})
export default class HomeComponent {
 
}
