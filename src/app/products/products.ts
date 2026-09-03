import {
  Component,
  inject
} from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';

import {
  CommonModule
} from '@angular/common';

import {
  RouterLink
} from '@angular/router';

import {
  ProductService
} from '../services/product.service';

import {
  CartService
} from '../services/cart.service';

import {
  Category,
  Gender,
  Product
} from '../models/product.model';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  private readonly route = inject(ActivatedRoute);

  private readonly productService =
    inject(ProductService);

  private readonly cartService =
    inject(CartService);

  products: Product[] = [];

  title = 'Products';

  subtitle = '';

  constructor() {

    this.route.data.subscribe(data => {

      const gender =
        data['gender'] as Gender | undefined;

      const category =
        data['category'] as Category | undefined;

      if (gender && category) {

        this.products =
          this.productService.getByCategory(
            gender,
            category
          );

        this.title =
          `${gender} ${category}`;

        this.subtitle =
          `Explore our ${category.toLowerCase()} collection for ${gender.toLowerCase()}.`;

      } else if (gender) {

        this.products =
          this.productService.getByGender(gender);

        this.title =
          `${gender} Collection`;

        this.subtitle =
          `Explore all ${gender.toLowerCase()} fashion.`;

      } else {

        this.products =
          this.productService.getAll();

        this.title = 'All Products';

        this.subtitle =
          'Discover our latest collection.';
      }

    });
  }

  addToCart(product: Product): void {

    this.cartService.addToCart(product);

    alert(
      `${product.name} has been added to your cart.`
    );
  }

  imageError(event: Event): void {

    const image =
      event.target as HTMLImageElement;

    image.src =
      '/images/placeholder.svg';
  }
}
