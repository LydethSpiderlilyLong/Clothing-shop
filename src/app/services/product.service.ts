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
