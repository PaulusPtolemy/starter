export interface IProduct {
  id: number;
  name: string;
  description: string;
  ean: string;
  upc: string;
  image: string;
  images?: IProductImages[] | null;
  net_price: number;
  taxes: number;
  price: string;
  categories?: number[] | null;
  tags?: string[] | null;
}

export interface IProductImages {
  title: string;
  description: string;
  url: string;
}
