import { Component, inject } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  private readonly cartService = inject(CartService);
  readonly authService = inject(AuthService);

  readonly cartCount = this.cartService.itemCount;

  logout(): void {
    this.authService.logout();
  }
}
