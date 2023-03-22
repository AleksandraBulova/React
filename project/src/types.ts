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
  photo: string;
}

export interface InputValues {
  name: string;
  type: string;
  value: string;
  placeholder: string;
}
