import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLoggedIn$: any;

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isAuthenticated();
  }

  

  logout(): void {
    this.authService.logout();
  }

}
