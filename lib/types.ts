export interface Product {
  id: number;
  name: string;
  price_in_cents: number;
  image_url: string;
}

export interface CartItem extends Product {
  quantity: number;
}