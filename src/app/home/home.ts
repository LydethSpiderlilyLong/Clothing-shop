import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  private readonly productService = inject(ProductService);

  readonly promotions: Product[] =
    this.productService.getPromotions();

  readonly bestSellers: Product[] =
    this.productService.getBestSellers();

  imageError(event: Event): void {

    const image = event.target as HTMLImageElement;

    image.src = '/images/placeholder.svg';
  }
}
