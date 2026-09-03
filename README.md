# Clothing-shop
WD midterm semester1 Y2

CASUAL BUT NOT CASUAL
│
├── WOMEN
│   ├── Clothing
│   ├── Shoes
│   └── Accessories
│
└── MEN
    ├── Clothing
    ├── Shoes
    └── Accessories
==================================================================== 
1. Create the new Angular project
   
  cd Desktop

  ng new casual-but-not-casual --routing --style=css --standalone --ssr=false

  cd casual-but-not-casual

  code .
==================================================================== 
- create the components/services:

  ng g c header
  ng g c footer
  ng g c home
  ng g c products
  ng g c product-detail
  ng g c cart
  ng g c login

  ng g s services/product
  ng g s services/cart
  ng g s services/auth

  mkdir src\app\models

  mkdir public\images
  mkdir public\images\logo
  mkdir public\images\banner

  mkdir public\images\women
  mkdir public\images\women\clothing
  mkdir public\images\women\shoes
  mkdir public\images\women\accessories

  mkdir public\images\men
  mkdir public\images\men\clothing
  mkdir public\images\men\shoes
  mkdir public\images\men\accessories
==================================================================== 
Project Structure

  casual-but-not-casual/
│
├── public/
│   └── images/
│       ├── logo/
│       ├── banner/
│       ├── women/
│       │   ├── clothing/
│       │   ├── shoes/
│       │   └── accessories/
│       │
│       └── men/
│           ├── clothing/
│           ├── shoes/
│           └── accessories/
│
└── src/
    └── app/
        ├── models/
        ├── services/
        ├── header/
        ├── footer/
        ├── home/
        ├── products/
        ├── product-detail/
        ├── cart/
        ├── login/
        ├── app.ts
        ├── app.html
        ├── app.css
        ├── app.routes.ts
        └── app.config.ts
==================================================================== 
Product model

export type Gender = 'Women' | 'Men';

export type Category =
  | 'Clothing'
  | 'Shoes'
  | 'Accessories';

export interface Product {
  id: number;
  name: string;
  gender: Gender;
  category: Category;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  isBestSeller: boolean;
  isPromotion: boolean;
}
==================================================================== 
Product service

import { Injectable } from '@angular/core';
import { Category, Gender, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly products: Product[] = [

    // =========================
    // WOMEN - CLOTHING
    // =========================

    {
      id: 1,
      name: 'Elegant Summer Dress',
      gender: 'Women',
      category: 'Clothing',
      price: 39.99,
      oldPrice: 49.99,
      image: '/images/women/clothing/women-dress.jpg',
      description: 'A beautiful and comfortable summer dress for casual occasions.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Beige'],
      rating: 4.8,
      isBestSeller: true,
      isPromotion: true
    },

    {
      id: 2,
      name: 'Casual Blouse',
      gender: 'Women',
      category: 'Clothing',
      price: 24.99,
      image: '/images/women/clothing/women-blouse.jpg',
      description: 'Simple casual blouse perfect for everyday outfits.',
      sizes: ['S', 'M', 'L'],
      colors: ['White', 'Pink', 'Blue'],
      rating: 4.5,
      isBestSeller: true,
      isPromotion: false
    },

    {
      id: 3,
      name: 'High Waist Jeans',
      gender: 'Women',
      category: 'Clothing',
      price: 34.99,
      oldPrice: 42.99,
      image: '/images/women/clothing/women-jeans.jpg',
      description: 'Modern high waist jeans with a comfortable fit.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Black'],
      rating: 4.7,
      isBestSeller: false,
      isPromotion: true
    },

    // =========================
    // WOMEN - SHOES
    // =========================

    {
      id: 4,
      name: 'Classic White Sneakers',
      gender: 'Women',
      category: 'Shoes',
      price: 45.99,
      image: '/images/women/shoes/women-sneakers.jpg',
      description: 'Clean and stylish sneakers for everyday wear.',
      sizes: ['36', '37', '38', '39', '40'],
      colors: ['White', 'Black'],
      rating: 4.9,
      isBestSeller: true,
      isPromotion: false
    },

    {
      id: 5,
      name: 'Elegant High Heels',
      gender: 'Women',
      category: 'Shoes',
      price: 52.99,
      oldPrice: 65.99,
      image: '/images/women/shoes/women-heels.jpg',
      description: 'Elegant heels designed for parties and special occasions.',
      sizes: ['36', '37', '38', '39'],
      colors: ['Black', 'Red', 'Beige'],
      rating: 4.6,
      isBestSeller: false,
      isPromotion: true
    },

    {
      id: 6,
      name: 'Summer Sandals',
      gender: 'Women',
      category: 'Shoes',
      price: 29.99,
      image: '/images/women/shoes/women-sandals.jpg',
      description: 'Lightweight sandals for comfortable summer days.',
      sizes: ['36', '37', '38', '39', '40'],
      colors: ['Brown', 'Black'],
      rating: 4.4,
      isBestSeller: false,
      isPromotion: false
    },

    // =========================
    // WOMEN - ACCESSORIES
    // =========================

    {
      id: 7,
      name: 'Classic Handbag',
      gender: 'Women',
      category: 'Accessories',
      price: 59.99,
      oldPrice: 75.99,
      image: '/images/women/accessories/handbag.jpg',
      description: 'Stylish handbag suitable for work, shopping and casual occasions.',
      sizes: ['One Size'],
      colors: ['Black', 'Brown'],
      rating: 4.8,
      isBestSeller: true,
      isPromotion: true
    },

    {
      id: 8,
      name: 'Fashion Sunglasses',
      gender: 'Women',
      category: 'Accessories',
      price: 19.99,
      image: '/images/women/accessories/sunglasses.jpg',
      description: 'Modern sunglasses that complete your everyday style.',
      sizes: ['One Size'],
      colors: ['Black', 'Brown'],
      rating: 4.3,
      isBestSeller: false,
      isPromotion: false
    },

    {
      id: 9,
      name: 'Minimalist Watch',
      gender: 'Women',
      category: 'Accessories',
      price: 35.99,
      image: '/images/women/accessories/watch.jpg',
      description: 'Minimalist watch with a clean and elegant design.',
      sizes: ['One Size'],
      colors: ['Gold', 'Silver'],
      rating: 4.5,
      isBestSeller: false,
      isPromotion: false
    },

    // =========================
    // MEN - CLOTHING
    // =========================

    {
      id: 10,
      name: 'Classic Casual Shirt',
      gender: 'Men',
      category: 'Clothing',
      price: 29.99,
      oldPrice: 39.99,
      image: '/images/men/clothing/men-shirt.jpg',
      description: 'Classic casual shirt suitable for everyday outfits.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Blue'],
      rating: 4.7,
      isBestSeller: true,
      isPromotion: true
    },

    {
      id: 11,
      name: 'Basic T-Shirt',
      gender: 'Men',
      category: 'Clothing',
      price: 18.99,
      image: '/images/men/clothing/men-tshirt.jpg',
      description: 'Comfortable basic T-shirt for everyday casual wear.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Gray'],
      rating: 4.6,
      isBestSeller: true,
      isPromotion: false
    },

    {
      id: 12,
      name: 'Slim Fit Jeans',
      gender: 'Men',
      category: 'Clothing',
      price: 39.99,
      oldPrice: 49.99,
      image: '/images/men/clothing/men-jeans.jpg',
      description: 'Modern slim fit jeans designed for everyday comfort.',
      sizes: ['28', '30', '32', '34', '36'],
      colors: ['Blue', 'Black'],
      rating: 4.8,
      isBestSeller: false,
      isPromotion: true
    },

    // =========================
    // MEN - SHOES
    // =========================

    {
      id: 13,
      name: 'Classic Sneakers',
      gender: 'Men',
      category: 'Shoes',
      price: 49.99,
      image: '/images/men/shoes/men-sneakers.jpg',
      description: 'Versatile sneakers for casual everyday outfits.',
      sizes: ['39', '40', '41', '42', '43', '44'],
      colors: ['White', 'Black'],
      rating: 4.8,
      isBestSeller: true,
      isPromotion: false
    },

    {
      id: 14,
      name: 'Leather Casual Shoes',
      gender: 'Men',
      category: 'Shoes',
      price: 65.99,
      oldPrice: 79.99,
      image: '/images/men/shoes/men-leather-shoes.jpg',
      description: 'Premium casual leather shoes with a comfortable design.',
      sizes: ['39', '40', '41', '42', '43'],
      colors: ['Brown', 'Black'],
      rating: 4.7,
      isBestSeller: false,
      isPromotion: true
    },

    {
      id: 15,
      name: 'Casual Sandals',
      gender: 'Men',
      category: 'Shoes',
      price: 25.99,
      image: '/images/men/shoes/men-sandals.jpg',
      description: 'Comfortable sandals for everyday casual use.',
      sizes: ['39', '40', '41', '42', '43'],
      colors: ['Black', 'Brown'],
      rating: 4.4,
      isBestSeller: false,
      isPromotion: false
    },

    // =========================
    // MEN - ACCESSORIES
    // =========================

    {
      id: 16,
      name: 'Leather Wallet',
      gender: 'Men',
      category: 'Accessories',
      price: 22.99,
      image: '/images/men/accessories/wallet.jpg',
      description: 'Compact leather wallet with multiple card slots.',
      sizes: ['One Size'],
      colors: ['Black', 'Brown'],
      rating: 4.6,
      isBestSeller: true,
      isPromotion: false
    },

    {
      id: 17,
      name: 'Classic Sunglasses',
      gender: 'Men',
      category: 'Accessories',
      price: 24.99,
      oldPrice: 32.99,
      image: '/images/men/accessories/sunglasses.jpg',
      description: 'Classic sunglasses with a modern casual look.',
      sizes: ['One Size'],
      colors: ['Black', 'Brown'],
      rating: 4.5,
      isBestSeller: false,
      isPromotion: true
    },

    {
      id: 18,
      name: 'Classic Leather Belt',
      gender: 'Men',
      category: 'Accessories',
      price: 27.99,
      image: '/images/men/accessories/belt.jpg',
      description: 'Simple leather belt that matches both casual and smart outfits.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
      rating: 4.7,
      isBestSeller: true,
      isPromotion: false
    }
  ];

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getByGender(gender: Gender): Product[] {
    return this.products.filter(product => product.gender === gender);
  }

  getByCategory(
    gender: Gender,
    category: Category
  ): Product[] {
    return this.products.filter(
      product =>
        product.gender === gender &&
        product.category === category
    );
  }

  getBestSellers(): Product[] {
    return this.products.filter(product => product.isBestSeller);
  }

  getPromotions(): Product[] {
    return this.products.filter(product => product.isPromotion);
  }
}
==================================================================== 
Cart service

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
==================================================================== 
Auth service

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly userSignal = signal<string | null>(
    localStorage.getItem('cbc_user')
  );

  readonly user = this.userSignal.asReadonly();

  login(username: string, password: string): boolean {

    if (!username.trim() || !password.trim()) {
      return false;
    }

    localStorage.setItem('cbc_user', username);

    this.userSignal.set(username);

    return true;
  }

  logout(): void {

    localStorage.removeItem('cbc_user');

    this.userSignal.set(null);
  }

  isLoggedIn(): boolean {
    return this.userSignal() !== null;
  }
}
==================================================================== 
Routes

import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Products } from './products/products';
import { ProductDetail } from './product-detail/product-detail';
import { Cart } from './cart/cart';
import { Login } from './login/login';

export const routes: Routes = [

  // HOME
  {
    path: '',
    component: Home
  },

  // WOMEN
  {
    path: 'women',
    component: Products,
    data: {
      gender: 'Women'
    }
  },

  {
    path: 'women/clothing',
    component: Products,
    data: {
      gender: 'Women',
      category: 'Clothing'
    }
  },

  {
    path: 'women/shoes',
    component: Products,
    data: {
      gender: 'Women',
      category: 'Shoes'
    }
  },

  {
    path: 'women/accessories',
    component: Products,
    data: {
      gender: 'Women',
      category: 'Accessories'
    }
  },

  // MEN
  {
    path: 'men',
    component: Products,
    data: {
      gender: 'Men'
    }
  },

  {
    path: 'men/clothing',
    component: Products,
    data: {
      gender: 'Men',
      category: 'Clothing'
    }
  },

  {
    path: 'men/shoes',
    component: Products,
    data: {
      gender: 'Men',
      category: 'Shoes'
    }
  },

  {
    path: 'men/accessories',
    component: Products,
    data: {
      gender: 'Men',
      category: 'Accessories'
    }
  },

  // PRODUCT DETAIL
  {
    path: 'product/:id',
    component: ProductDetail
  },

  // CART
  {
    path: 'cart',
    component: Cart
  },

  // LOGIN
  {
    path: 'login',
    component: Login
  },

  // FALLBACK
  {
    path: '**',
    redirectTo: ''
  }
];
==================================================================== 
App configuration

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
==================================================================== 
app.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

app.html

<app-header></app-header>

<main class="main-content">
  <router-outlet></router-outlet>
</main>

<app-footer></app-footer>

app.css

.main-content {
  min-height: 70vh;
}

header.ts

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

header.html
<header class="header">

  <div class="top-header">

    <a routerLink="/" class="logo">
      <span>CASUAL</span>
      <strong>BUT NOT CASUAL</strong>
    </a>

    <nav class="main-nav">

      <a
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">
        Home
      </a>

      <div class="nav-dropdown">

        <a routerLink="/women">
          Women
        </a>

        <div class="dropdown-menu">

          <a routerLink="/women/clothing">
            Clothing
          </a>

          <a routerLink="/women/shoes">
            Shoes
          </a>

          <a routerLink="/women/accessories">
            Accessories
          </a>

        </div>

      </div>

      <div class="nav-dropdown">

        <a routerLink="/men">
          Men
        </a>

        <div class="dropdown-menu">

          <a routerLink="/men/clothing">
            Clothing
          </a>

          <a routerLink="/men/shoes">
            Shoes
          </a>

          <a routerLink="/men/accessories">
            Accessories
          </a>

        </div>

      </div>

    </nav>

    <div class="header-actions">

      <select aria-label="Country">
        <option>Cambodia</option>
        <option>Thailand</option>
        <option>Vietnam</option>
        <option>Singapore</option>
      </select>

      <select aria-label="Language">
        <option>English</option>
        <option>Khmer</option>
        <option>Chinese</option>
      </select>

      <button class="icon-button">
        ♡
      </button>

      @if (authService.user(); as username) {

        <div class="user-area">
          <span>Hi, {{ username }}</span>

          <button
            class="logout-button"
            (click)="logout()">
            Logout
          </button>
        </div>

      } @else {

        <a
          routerLink="/login"
          class="login-button">
          Login
        </a>

      }

      <a
        routerLink="/cart"
        class="cart-button">

        🛒

        <span class="cart-count">
          {{ cartCount() }}
        </span>

      </a>

    </div>

  </div>

</header>

header.css

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
}

.top-header {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 0 6%;
}

.logo {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #111;
  line-height: 1;
}

.logo span {
  font-size: 22px;
  letter-spacing: 4px;
}

.logo strong {
  font-size: 11px;
  letter-spacing: 3px;
  margin-top: 6px;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.main-nav a {
  color: #222;
  text-decoration: none;
  font-size: 14px;
}

.main-nav a:hover,
.main-nav .active {
  text-decoration: underline;
}

.nav-dropdown {
  position: relative;
  padding: 25px 0;
}

.dropdown-menu {
  position: absolute;
  top: 68px;
  left: -15px;
  width: 180px;
  display: none;
  background: white;
  border: 1px solid #eeeeee;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.nav-dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu a {
  display: block;
  padding: 14px 18px;
}

.dropdown-menu a:hover {
  background: #f7f7f7;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-actions select {
  border: 1px solid #ddd;
  padding: 8px;
  background: white;
}

.icon-button,
.cart-button {
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
}

.cart-button {
  position: relative;
  text-decoration: none;
  color: #111;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -10px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111;
  color: white;
  border-radius: 50%;
  font-size: 10px;
}

.login-button {
  color: #111;
  text-decoration: none;
  font-size: 14px;
}

.user-area {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}

.logout-button {
  border: none;
  background: transparent;
  cursor: pointer;
  text-decoration: underline;
}

@media (max-width: 1000px) {

  .top-header {
    flex-wrap: wrap;
    padding: 15px 4%;
  }

  .main-nav {
    order: 3;
    width: 100%;
    justify-content: center;
  }

  .header-actions select {
    display: none;
  }
}

home.ts

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

home.html

<!-- HERO -->

<section class="hero">

  <div class="hero-content">

    <p>NEW SEASON</p>

    <h1>
      STYLE THAT<br>
      FEELS LIKE YOU
    </h1>

    <p class="hero-description">
      Discover casual fashion made for everyday life.
    </p>

    <div class="hero-buttons">

      <a routerLink="/women" class="primary-button">
        Shop Women
      </a>

      <a routerLink="/men" class="secondary-button">
        Shop Men
      </a>

    </div>

  </div>

</section>


<!-- CATEGORIES -->

<section class="section">

  <div class="section-heading">
    <p>CATEGORIES</p>
    <h2>Shop By Category</h2>
  </div>

  <div class="category-grid">

    <a
      routerLink="/women/clothing"
      class="category-card">

      <div class="category-image">
        <img
          src="/images/women/clothing/women-dress.jpg"
          alt="Women Clothing"
          (error)="imageError($event)">
      </div>

      <h3>Women Clothing</h3>

    </a>


    <a
      routerLink="/women/shoes"
      class="category-card">

      <div class="category-image">
        <img
          src="/images/women/shoes/women-sneakers.jpg"
          alt="Women Shoes"
          (error)="imageError($event)">
      </div>

      <h3>Women Shoes</h3>

    </a>


    <a
      routerLink="/women/accessories"
      class="category-card">

      <div class="category-image">
        <img
          src="/images/women/accessories/handbag.jpg"
          alt="Women Accessories"
          (error)="imageError($event)">
      </div>

      <h3>Women Accessories</h3>

    </a>


    <a
      routerLink="/men/clothing"
      class="category-card">

      <div class="category-image">
        <img
          src="/images/men/clothing/men-shirt.jpg"
          alt="Men Clothing"
          (error)="imageError($event)">
      </div>

      <h3>Men Clothing</h3>

    </a>


    <a
      routerLink="/men/shoes"
      class="category-card">

      <div class="category-image">
        <img
          src="/images/men/shoes/men-sneakers.jpg"
          alt="Men Shoes"
          (error)="imageError($event)">
      </div>

      <h3>Men Shoes</h3>

    </a>


    <a
      routerLink="/men/accessories"
      class="category-card">

      <div class="category-image">
        <img
          src="/images/men/accessories/wallet.jpg"
          alt="Men Accessories"
          (error)="imageError($event)">
      </div>

      <h3>Men Accessories</h3>

    </a>

  </div>

</section>


<!-- PROMOTION -->

<section class="promotion-banner">

  <div>

    <p>LIMITED TIME</p>

    <h2>
      UP TO 30% OFF
    </h2>

    <p>
      Selected styles for the new season.
    </p>

    <a
      routerLink="/women"
      class="primary-button">
      Shop Sale
    </a>

  </div>

</section>


<!-- PROMOTIONS -->

<section class="section">

  <div class="section-heading">
    <p>SALE</p>
    <h2>Promotion</h2>
  </div>

  <div class="product-grid">

    <div
      class="product-card"
      *ngFor="let product of promotions">

      <a [routerLink]="['/product', product.id]">

        <div class="product-image">

          <img
            [src]="product.image"
            [alt]="product.name"
            (error)="imageError($event)">

          <span class="sale-label">
            SALE
          </span>

        </div>

        <div class="product-info">

          <p>
            {{ product.gender }} · {{ product.category }}
          </p>

          <h3>
            {{ product.name }}
          </h3>

          <strong>
            ${{ product.price | number:'1.2-2' }}
          </strong>

          <del *ngIf="product.oldPrice">
            ${{ product.oldPrice | number:'1.2-2' }}
          </del>

        </div>

      </a>

    </div>

  </div>

</section>


<!-- BEST SELLERS -->

<section class="section">

  <div class="section-heading">
    <p>POPULAR</p>
    <h2>Best Sellers</h2>
  </div>

  <div class="product-grid">

    <div
      class="product-card"
      *ngFor="let product of bestSellers">

      <a [routerLink]="['/product', product.id]">

        <div class="product-image">

          <img
            [src]="product.image"
            [alt]="product.name"
            (error)="imageError($event)">

        </div>

        <div class="product-info">

          <p>
            {{ product.gender }} · {{ product.category }}
          </p>

          <h3>
            {{ product.name }}
          </h3>

          <strong>
            ${{ product.price | number:'1.2-2' }}
          </strong>

        </div>

      </a>

    </div>

  </div>

</section>

home.css

.hero {
  min-height: 620px;
  display: flex;
  align-items: center;
  padding: 80px 8%;
  background:
    linear-gradient(
      90deg,
      rgba(0,0,0,.65),
      rgba(0,0,0,.15)
    ),
    url('/images/banner/home-banner.jpg')
    center / cover no-repeat;
  color: white;
}

.hero-content {
  max-width: 600px;
}

.hero-content > p:first-child {
  letter-spacing: 4px;
  font-size: 13px;
}

.hero h1 {
  font-size: 64px;
  line-height: 1;
  margin: 20px 0;
}

.hero-description {
  font-size: 17px;
  margin-bottom: 30px;
}

.hero-buttons {
  display: flex;
  gap: 12px;
}

.primary-button,
.secondary-button {
  display: inline-block;
  padding: 14px 28px;
  text-decoration: none;
}

.primary-button {
  background: #111;
  color: white;
}

.secondary-button {
  background: white;
  color: #111;
}

.section {
  padding: 80px 6%;
}

.section-heading {
  text-align: center;
  margin-bottom: 45px;
}

.section-heading p {
  font-size: 12px;
  letter-spacing: 3px;
}

.section-heading h2 {
  font-size: 35px;
  margin-top: 8px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.category-card {
  text-decoration: none;
  color: #111;
}

.category-image {
  height: 420px;
  overflow: hidden;
  background: #f2f2f2;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
}

.category-card:hover img {
  transform: scale(1.05);
}

.category-card h3 {
  margin-top: 15px;
  font-size: 17px;
}

.promotion-banner {
  min-height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #eeeeee;
}

.promotion-banner h2 {
  font-size: 55px;
  margin: 10px 0 20px;
}

.promotion-banner p {
  margin-bottom: 25px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.product-card a {
  text-decoration: none;
  color: #111;
}

.product-image {
  position: relative;
  height: 400px;
  overflow: hidden;
  background: #f4f4f4;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.sale-label {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 7px 10px;
  background: #111;
  color: white;
  font-size: 11px;
}

.product-info {
  padding-top: 15px;
}

.product-info p {
  color: #777;
  font-size: 12px;
}

.product-info h3 {
  font-size: 15px;
  margin: 7px 0;
}

.product-info strong {
  margin-right: 8px;
}

.product-info del {
  color: #999;
}

@media (max-width: 900px) {

  .hero h1 {
    font-size: 45px;
  }

  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {

  .category-grid,
  .product-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: 500px;
  }

  .hero h1 {
    font-size: 38px;
  }
}

Products component

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

product.html

<section class="products-page">

  <div class="products-heading">

    <p>CASUAL BUT NOT CASUAL</p>

    <h1>
      {{ title }}
    </h1>

    <span>
      {{ subtitle }}
    </span>

  </div>


  <div
    class="breadcrumb">

    <a routerLink="/">
      Home
    </a>

    <span>/</span>

    <span>
      {{ title }}
    </span>

  </div>


  <div
    class="products-grid">

    <article
      class="product-card"
      *ngFor="let product of products">

      <a
        [routerLink]="['/product', product.id]"
        class="product-link">

        <div class="product-image">

          <img
            [src]="product.image"
            [alt]="product.name"
            (error)="imageError($event)">

          <span
            *ngIf="product.isPromotion"
            class="sale-label">
            SALE
          </span>

        </div>

      </a>


      <div class="product-details">

        <div class="category">
          {{ product.gender }} ·
          {{ product.category }}
        </div>

        <a
          [routerLink]="['/product', product.id]"
          class="product-name">

          {{ product.name }}

        </a>

        <div class="rating">
          ★ {{ product.rating }}
        </div>

        <div class="price">

          <strong>
            ${{ product.price | number:'1.2-2' }}
          </strong>

          <del *ngIf="product.oldPrice">
            ${{ product.oldPrice | number:'1.2-2' }}
          </del>

        </div>

        <button
          class="add-button"
          (click)="addToCart(product)">

          Add to Cart

        </button>

      </div>

    </article>

  </div>


  <div
    *ngIf="products.length === 0"
    class="empty">

    No products found.

  </div>

</section>

product.css

.products-page {
  padding: 60px 6% 90px;
}

.products-heading {
  text-align: center;
  margin-bottom: 30px;
}

.products-heading p {
  font-size: 11px;
  letter-spacing: 3px;
}

.products-heading h1 {
  font-size: 45px;
  margin: 12px 0;
}

.products-heading span {
  color: #777;
}

.breadcrumb {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 45px;
  font-size: 13px;
}

.breadcrumb a {
  color: #111;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.product-card {
  min-width: 0;
}

.product-link {
  display: block;
  text-decoration: none;
}

.product-image {
  position: relative;
  height: 430px;
  overflow: hidden;
  background: #f4f4f4;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.06);
}

.sale-label {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 6px 10px;
  background: #111;
  color: white;
  font-size: 11px;
}

.product-details {
  padding: 15px 0;
}

.category {
  color: #888;
  font-size: 11px;
  margin-bottom: 7px;
}

.product-name {
  display: block;
  color: #111;
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 8px;
}

.rating {
  font-size: 12px;
  margin-bottom: 8px;
}

.price strong {
  margin-right: 10px;
}

.price del {
  color: #999;
  font-size: 13px;
}

.add-button {
  width: 100%;
  margin-top: 14px;
  padding: 12px;
  border: 1px solid #111;
  background: #111;
  color: white;
  cursor: pointer;
}

.add-button:hover {
  background: white;
  color: #111;
}

.empty {
  text-align: center;
  padding: 100px;
}

@media (max-width: 1000px) {

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {

  .products-grid {
    grid-template-columns: 1fr;
  }

  .products-heading h1 {
    font-size: 32px;
  }
}

product-detail/product-detail.ts

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

product-detail/product-detail.html

<section
  class="detail-page"
  *ngIf="product">

  <div class="detail-image">

    <img
      [src]="product.image"
      [alt]="product.name"
      (error)="imageError($event)">

  </div>


  <div class="detail-info">

    <p class="category">
      {{ product.gender }} ·
      {{ product.category }}
    </p>

    <h1>
      {{ product.name }}
    </h1>

    <div class="rating">
      ★ {{ product.rating }}
    </div>

    <div class="price">

      <strong>
        ${{ product.price | number:'1.2-2' }}
      </strong>

      <del *ngIf="product.oldPrice">
        ${{ product.oldPrice | number:'1.2-2' }}
      </del>

    </div>

    <p class="description">
      {{ product.description }}
    </p>


    <div class="option">

      <label>
        Size
      </label>

      <div class="options">

        <button
          *ngFor="let size of product.sizes"
          [class.selected]="selectedSize === size"
          (click)="selectedSize = size">

          {{ size }}

        </button>

      </div>

    </div>


    <div class="option">

      <label>
        Color
      </label>

      <div class="options">

        <button
          *ngFor="let color of product.colors"
          [class.selected]="selectedColor === color"
          (click)="selectedColor = color">

          {{ color }}

        </button>

      </div>

    </div>


    <div class="quantity">

      <label>
        Quantity
      </label>

      <div class="quantity-control">

        <button
          (click)="decreaseQuantity()">
          −
        </button>

        <span>
          {{ quantity }}
        </span>

        <button
          (click)="increaseQuantity()">
          +
        </button>

      </div>

    </div>


    <button
      class="add-cart"
      (click)="addToCart()">

      Add to Cart

    </button>


    <a
      routerLink="/cart"
      class="view-cart">

      View Cart

    </a>

  </div>

</section>

product-detail/product-detail.css

.detail-page {
  max-width: 1200px;
  margin: auto;
  padding: 70px 6%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
}

.detail-image {
  height: 650px;
  background: #f4f4f4;
}

.detail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-info {
  padding-top: 30px;
}

.category {
  color: #777;
  font-size: 12px;
}

.detail-info h1 {
  font-size: 40px;
  margin: 15px 0;
}

.rating {
  margin-bottom: 20px;
}

.price {
  font-size: 22px;
  margin-bottom: 25px;
}

.price strong {
  margin-right: 12px;
}

.price del {
  color: #999;
  font-size: 15px;
}

.description {
  color: #666;
  line-height: 1.7;
  margin-bottom: 35px;
}

.option {
  margin-bottom: 25px;
}

.option label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}

.options {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.options button {
  min-width: 45px;
  padding: 10px 15px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.options button.selected {
  background: #111;
  color: white;
  border-color: #111;
}

.quantity {
  margin-bottom: 25px;
}

.quantity label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

.quantity-control {
  display: flex;
  align-items: center;
  width: fit-content;
  border: 1px solid #ddd;
}

.quantity-control button {
  width: 40px;
  height: 40px;
  border: none;
  background: white;
  cursor: pointer;
}

.quantity-control span {
  width: 40px;
  text-align: center;
}

.add-cart {
  width: 100%;
  padding: 16px;
  background: #111;
  color: white;
  border: 1px solid #111;
  cursor: pointer;
  font-size: 15px;
}

.view-cart {
  display: block;
  text-align: center;
  color: #111;
  margin-top: 15px;
}

@media (max-width: 800px) {

  .detail-page {
    grid-template-columns: 1fr;
  }

  .detail-image {
    height: 500px;
  }
}

Cart component
cart/cart.ts
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

cart.html

<section class="cart-page">

  <div class="cart-heading">

    <p>YOUR SHOPPING BAG</p>

    <h1>
      Shopping Cart
    </h1>

  </div>


  @if (items().length > 0) {

    <div class="cart-layout">

      <div class="cart-items">

        @for (item of items(); track item.id) {

          <div class="cart-item">

            <img
              [src]="item.image"
              [alt]="item.name">

            <div class="item-info">

              <p>
                {{ item.gender }} ·
                {{ item.category }}
              </p>

              <h3>
                {{ item.name }}
              </h3>

              <strong>
                ${{ item.price | number:'1.2-2' }}
              </strong>

              <div class="quantity">

                <button
                  (click)="decrease(item.id)">
                  −
                </button>

                <span>
                  {{ item.quantity }}
                </span>

                <button
                  (click)="increase(item.id)">
                  +
                </button>

              </div>

              <button
                class="remove"
                (click)="remove(item.id)">

                Remove

              </button>

            </div>

          </div>

        }

      </div>


      <aside class="summary">

        <h2>
          Order Summary
        </h2>

        <div class="summary-row">

          <span>
            Items
          </span>

          <span>
            {{ cartService.itemCount() }}
          </span>

        </div>

        <div class="summary-row total">

          <span>
            Total
          </span>

          <strong>
            ${{ total() | number:'1.2-2' }}
          </strong>

        </div>

        <button
          class="checkout"
          (click)="checkout()">

          Checkout

        </button>

      </aside>

    </div>

  } @else {

    <div class="empty-cart">

      <div class="empty-icon">
        🛒
      </div>

      <h2>
        Your cart is empty
      </h2>

      <p>
        Looks like you haven't added anything yet.
      </p>

      <a
        routerLink="/"
        class="shop-button">

        Continue Shopping

      </a>

    </div>

  }

</section>

cart.css

.cart-page {
  padding: 70px 6% 100px;
  max-width: 1300px;
  margin: auto;
}

.cart-heading {
  text-align: center;
  margin-bottom: 50px;
}

.cart-heading p {
  letter-spacing: 3px;
  font-size: 11px;
}

.cart-heading h1 {
  font-size: 42px;
}

.cart-layout {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 50px;
}

.cart-item {
  display: flex;
  gap: 25px;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}

.cart-item img {
  width: 160px;
  height: 190px;
  object-fit: cover;
  background: #f3f3f3;
}

.item-info {
  flex: 1;
}

.item-info p {
  color: #888;
  font-size: 12px;
}

.item-info h3 {
  margin: 8px 0;
}

.quantity {
  display: flex;
  align-items: center;
  width: fit-content;
  border: 1px solid #ddd;
  margin-top: 15px;
}

.quantity button {
  width: 35px;
  height: 35px;
  border: none;
  background: white;
  cursor: pointer;
}

.quantity span {
  width: 35px;
  text-align: center;
}

.remove {
  margin-top: 12px;
  border: none;
  background: none;
  text-decoration: underline;
  cursor: pointer;
}

.summary {
  height: fit-content;
  padding: 30px;
  background: #f6f6f6;
}

.summary h2 {
  margin-top: 0;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}

.summary-row.total {
  font-size: 20px;
  border-bottom: none;
}

.checkout {
  width: 100%;
  padding: 15px;
  background: #111;
  color: white;
  border: none;
  cursor: pointer;
}

.empty-cart {
  text-align: center;
  padding: 100px 20px;
}

.empty-icon {
  font-size: 50px;
}

.shop-button {
  display: inline-block;
  margin-top: 20px;
  padding: 14px 25px;
  background: #111;
  color: white;
  text-decoration: none;
}

@media (max-width: 800px) {

  .cart-layout {
    grid-template-columns: 1fr;
  }

  .cart-item img {
    width: 120px;
    height: 150px;
  }
}

Login component
login.ts

import {
  Component,
  inject
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

import {
  Router,
  RouterLink
} from '@angular/router';

import {
  AuthService
} from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private readonly authService =
    inject(AuthService);

  private readonly router =
    inject(Router);

  username = '';

  password = '';

  errorMessage = '';

  login(): void {

    const success =
      this.authService.login(
        this.username,
        this.password
      );

    if (success) {

      this.errorMessage = '';

      this.router.navigate(['/']);

    } else {

      this.errorMessage =
        'Please enter username and password.';

    }
  }
}

login.html

<section class="login-page">

  <div class="login-box">

    <p class="brand">
      CASUAL BUT NOT CASUAL
    </p>

    <h1>
      Welcome Back
    </h1>

    <p class="subtitle">
      Sign in to continue shopping.
    </p>


    <form
      (ngSubmit)="login()">

      <label>
        Username
      </label>

      <input
        type="text"
        name="username"
        [(ngModel)]="username"
        placeholder="Enter username">


      <label>
        Password
      </label>

      <input
        type="password"
        name="password"
        [(ngModel)]="password"
        placeholder="Enter password">


      @if (errorMessage) {

        <p class="error">
          {{ errorMessage }}
        </p>

      }


      <button
        type="submit">

        Login

      </button>

    </form>


    <a
      routerLink="/"
      class="back">

      ← Continue Shopping

    </a>

  </div>

</section>

login.css

.login-page {
  min-height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background: #f6f6f6;
}

.login-box {
  width: 420px;
  padding: 45px;
  background: white;
}

.brand {
  text-align: center;
  letter-spacing: 3px;
  font-size: 11px;
}

.login-box h1 {
  text-align: center;
  font-size: 35px;
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  color: #777;
  margin-bottom: 30px;
}

form label {
  display: block;
  margin: 15px 0 7px;
  font-size: 13px;
}

form input {
  width: 100%;
  box-sizing: border-box;
  padding: 14px;
  border: 1px solid #ddd;
}

form button {
  width: 100%;
  margin-top: 25px;
  padding: 15px;
  border: none;
  background: #111;
  color: white;
  cursor: pointer;
}

.error {
  color: #b00020;
  font-size: 13px;
  margin-top: 15px;
}

.back {
  display: block;
  text-align: center;
  color: #111;
  margin-top: 25px;
}

footer/footer.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
}

footer.html

<footer class="footer">

  <div class="footer-main">

    <div class="footer-brand">

      <h2>
        CASUAL
      </h2>

      <strong>
        BUT NOT CASUAL
      </strong>

      <p>
        Everyday fashion with a little
        something different.
      </p>

    </div>


    <div class="footer-column">

      <h3>
        Shop
      </h3>

      <a routerLink="/women/clothing">
        Women Clothing
      </a>

      <a routerLink="/women/shoes">
        Women Shoes
      </a>

      <a routerLink="/women/accessories">
        Women Accessories
      </a>

      <a routerLink="/men/clothing">
        Men Clothing
      </a>

      <a routerLink="/men/shoes">
        Men Shoes
      </a>

      <a routerLink="/men/accessories">
        Men Accessories
      </a>

    </div>


    <div class="footer-column">

      <h3>
        Customer Service
      </h3>

      <a href="#">
        Contact Us
      </a>

      <a href="#">
        Shipping
      </a>

      <a href="#">
        Returns
      </a>

      <a href="#">
        FAQ
      </a>

    </div>


    <div class="footer-column">

      <h3>
        Follow Us
      </h3>

      <a href="#">
        Facebook
      </a>

      <a href="#">
        Instagram
      </a>

      <a href="#">
        TikTok
      </a>

      <a href="#">
        Telegram
      </a>

    </div>


    <div class="footer-column qr-column">

      <h3>
        Download App
      </h3>

      <div class="qr-placeholder">
        QR
      </div>

      <p>
        Scan to shop with us.
      </p>

    </div>

  </div>


  <div class="payment">

    <span>
      We Accept
    </span>

    <strong>
      VISA
    </strong>

    <strong>
      Mastercard
    </strong>

    <strong>
      ABA
    </strong>

    <strong>
      ACLEDA
    </strong>

    <strong>
      KHQR
    </strong>

  </div>


  <div class="copyright">

    © 2026 CASUAL BUT NOT CASUAL.
    All Rights Reserved.

  </div>

</footer>

footer.css

.footer {
  background: #111;
  color: white;
  padding: 60px 6% 20px;
}

.footer-main {
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 40px;
  padding-bottom: 50px;
}

.footer-brand h2 {
  margin: 0;
  letter-spacing: 4px;
}

.footer-brand strong {
  font-size: 10px;
  letter-spacing: 3px;
}

.footer-brand p {
  color: #aaa;
  max-width: 260px;
  line-height: 1.6;
  margin-top: 20px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-column h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 14px;
}

.footer-column a {
  color: #aaa;
  text-decoration: none;
  font-size: 13px;
}

.footer-column a:hover {
  color: white;
}

.qr-placeholder {
  width: 100px;
  height: 100px;
  background: white;
  color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.qr-column p {
  color: #aaa;
  font-size: 12px;
}

.payment {
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding: 20px 0;
  display: flex;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
}

.payment span {
  color: #aaa;
}

.payment strong {
  font-size: 13px;
}

.copyright {
  text-align: center;
  color: #777;
  font-size: 12px;
  padding-top: 25px;
}

@media (max-width: 900px) {

  .footer-main {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {

  .footer-main {
    grid-template-columns: 1fr;
  }
}

src/styles.css

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family:
    Arial,
    Helvetica,
    sans-serif;

  color: #111;
  background: white;
}

button,
input,
select {
  font-family: inherit;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
}

a {
  color: inherit;
}

src/main.ts

import {
  bootstrapApplication
} from '@angular/platform-browser';

import {
  App
} from './app/app';

import {
  appConfig
} from './app/app.config';

bootstrapApplication(
  App,
  appConfig
).catch(
  err => console.error(err)
);

public/images/placeholder.svg
<img width="600" height="700" alt="image" src="https://github.com/user-attachments/assets/f1c443d2-fff7-4b8a-a045-2ba8932d9240" />

Image folder

public/
└── images/
    │
    ├── placeholder.svg
    │
    ├── logo/
    │   └── logo.png
    │
    ├── banner/
    │   └── home-banner.jpg
    │
    ├── women/
    │   │
    │   ├── clothing/
    │   │   ├── women-dress.jpg
    │   │   ├── women-blouse.jpg
    │   │   └── women-jeans.jpg
    │   │
    │   ├── shoes/
    │   │   ├── women-sneakers.jpg
    │   │   ├── women-heels.jpg
    │   │   └── women-sandals.jpg
    │   │
    │   └── accessories/
    │       ├── handbag.jpg
    │       ├── sunglasses.jpg
    │       └── watch.jpg
    │
    └── men/
        │
        ├── clothing/
        │   ├── men-shirt.jpg
        │   ├── men-tshirt.jpg
        │   └── men-jeans.jpg
        │
        ├── shoes/
        │   ├── men-sneakers.jpg
        │   ├── men-leather-shoes.jpg
        │   └── men-sandals.jpg
        │
        └── accessories/
            ├── wallet.jpg
            ├── sunglasses.jpg
            └── belt.jpg

final website navigation

HOME
 │
 ├── WOMEN
 │    │
 │    ├── Clothing
 │    │    └── Products
 │    │
 │    ├── Shoes
 │    │    └── Products
 │    │
 │    └── Accessories
 │         └── Products
 │
 └── MEN
      │
      ├── Clothing
      │    └── Products
      │
      ├── Shoes
      │    └── Products
      │
      └── Accessories
           └── Products


/                       → Home

/women                  → All Women
/women/clothing         → Women Clothing
/women/shoes            → Women Shoes
/women/accessories      → Women Accessories

/men                    → All Men
/men/clothing           → Men Clothing
/men/shoes              → Men Shoes
/men/accessories        → Men Accessories

/product/1              → Product detail
/product/2              → Product detail
...

/cart                   → Shopping cart

/login                  → Login
