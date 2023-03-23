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
  inputName: string;
}

export interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  brand: HTMLInputElement;
  description: HTMLInputElement;
  price: HTMLInputElement;
  date: HTMLInputElement;
  category: HTMLInputElement;
  strength: HTMLInputElement;
  photo: HTMLInputElement;
  agreement: HTMLInputElement;
}

export interface dataCardForm {
  name: string;
  brand: string;
  description: string;
  price: string;
  date: string;
  category: string;
  strength: string;
  photo: string;
}
