import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly cartItems = signal<CartItem[]>([]);

  readonly items = this.cartItems.asReadonly();

  readonly itemCount = computed(() =>
    this.cartItems().reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  readonly total = computed(() =>
    this.cartItems().reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  );

  addToCart(product: Product, quantity: number = 1): void {

    const currentItems = this.cartItems();

    const existingItem = currentItems.find(
      item => item.id === product.id
    );

    if (existingItem) {

      this.cartItems.set(
        currentItems.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity
              }
            : item
        )
      );

    } else {

      this.cartItems.set([
        ...currentItems,
        {
          ...product,
          quantity
        }
      ]);

    }
  }

  increaseQuantity(id: number): void {

    this.cartItems.update(items =>
      items.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  }

  decreaseQuantity(id: number): void {

    this.cartItems.update(items =>
      items
        .map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  removeFromCart(id: number): void {

    this.cartItems.update(items =>
      items.filter(item => item.id !== id)
    );
  }

  clearCart(): void {
    this.cartItems.set([]);
  }
}
