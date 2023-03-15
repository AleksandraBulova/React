export interface Route {
  id: number;
  name: string;
  path: string;
  element: React.ComponentClass;
}

export interface Product {
  id: number;
  type: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  stock: number;
  photo: Array<string>;
}
