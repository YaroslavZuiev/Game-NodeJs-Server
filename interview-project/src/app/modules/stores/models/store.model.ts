export interface StoreModel {
  id: number;
  name: string;
  mostPopular: ProductModel;
  goodsTotal: number;
  products: ProductModel[];
}

export interface ProductModel {
  id: number;
  amount: number;
  name?: string;
}
