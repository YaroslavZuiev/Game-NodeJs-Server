import { Injectable } from '@angular/core';

import { ProductModel, StoreModel } from '../models/store.model';
import stores from '../store-mock-data/stores.json';
import products from '../store-mock-data/products.json';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  public stores = stores;
  public products = products;
  public store: StoreModel;

  public getStoreItems(stores: StoreModel[]): StoreModel[] {
    stores = stores.map((item,index) => {
      return {
        ...item,
        id: ++index,
        goodsTotal: item.products.reduce((prev, current) => {
          return prev + current.amount;
        }, 0),
        products: item.products.map(el => {
          const product = this.products.find(prod => prod.id === el.id);
          if (product) {
            return {
              ...el,
              name: product.name,
            };
          }
          return el;
        }),
      };
    });
    return this.setMostPopularItem(stores);
  }

  private setMostPopularItem(stores:StoreModel[]): StoreModel[] {
    return stores.map(item => {
      return {
        ...item,
        mostPopular: this.getPopularStoreItem(item.products),
      };
    }) as StoreModel[];
  }

  private getPopularStoreItem(products: ProductModel[]): ProductModel {
    return products.reduce((previousValue, currentValue) => {
      return previousValue.amount < currentValue.amount
        ? previousValue
        : currentValue;
    });
  }
}
