import {
  Component,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RouterLink
} from '@angular/router';

import {
  CartService
} from '../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  readonly cartService =
    inject(CartService);

  readonly items =
    this.cartService.items;

  readonly total =
    this.cartService.total;

  increase(id: number): void {
    this.cartService.increaseQuantity(id);
  }

  decrease(id: number): void {
    this.cartService.decreaseQuantity(id);
  }

  remove(id: number): void {
    this.cartService.removeFromCart(id);
  }

  checkout(): void {

    if (this.items().length === 0) {
      return;
    }

    alert(
      'Checkout feature will be connected to the payment system later.'
    );
  }
}
