import { Component, effect, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/shared/data-access/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,RouterLink,RouterModule,RouterOutlet,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  authService = inject(AuthService);
  private router = inject(Router);
  title = '3sk_tv';
  isMenuCollapsed = true;

  constructor() {
    effect(() => {
      if (!this.authService.user()) {
        this.router.navigate(['auth', 'login']);
      }
    });
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
