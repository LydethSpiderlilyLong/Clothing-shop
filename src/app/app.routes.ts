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
