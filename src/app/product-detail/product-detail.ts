import {
  Component,
  inject,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  ActivatedRoute,
  Router,
  RouterLink
} from '@angular/router';

import {
  ProductService
} from '../services/product.service';

import {
  CartService
} from '../services/cart.service';

import {
  Product
} from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {

  private readonly route =
    inject(ActivatedRoute);

  private readonly router =
    inject(Router);

  private readonly productService =
    inject(ProductService);

  private readonly cartService =
    inject(CartService);

  product?: Product;

  quantity = 1;

  selectedSize = '';

  selectedColor = '';

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.product =
      this.productService.getById(id);

    if (!this.product) {
      this.router.navigate(['/']);
      return;
    }

    this.selectedSize =
      this.product.sizes[0];

    this.selectedColor =
      this.product.colors[0];
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {

    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {

    if (!this.product) {
      return;
    }

    this.cartService.addToCart(
      this.product,
      this.quantity
    );

    alert(
      `${this.product.name} has been added to your cart.`
    );
  }

  imageError(event: Event): void {

    const image =
      event.target as HTMLImageElement;

    image.src =
      '/images/placeholder.svg';
  }
}
