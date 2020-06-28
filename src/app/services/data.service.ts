import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';

const categories: Category[] = [
  { id: 1, name: 'Fruit' },
  { id: 2, name: 'Vegetables' },
  { id: 3, name: 'Nut' }
];
const products: Product[] = [
  { id: 1, name: 'Grapes', categoryId: 1 },
  { id: 2, name: 'Apples', categoryId: 1 },
  { id: 3, name: 'Lemons', categoryId: 1 },
  { id: 4, name: 'Bananas', categoryId: 1 },
  { id: 5, name: 'Mangoes', categoryId: 1 },
  { id: 6, name: 'Beets', categoryId: 2 },
  { id: 7, name: 'Cabbage', categoryId: 2 },
  { id: 8, name: 'Carrot', categoryId: 2 },
  { id: 9, name: 'Onions', categoryId: 2 },
  { id: 10, name: 'Peanuts', categoryId: 3 },
  { id: 11, name: 'Walnuts', categoryId: 3 },
  { id: 12, name: 'Almonds', categoryId: 3 }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  fetchCategories() {
    return categories;
  }

  fetchProducts(categoryId) {
    return products.filter(product => product.categoryId == categoryId);
  }
}
