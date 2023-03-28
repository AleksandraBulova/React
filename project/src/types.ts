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

export interface MyStateHeader {
  name: string;
  names: string[];
}

export interface MyStateMainPage {
  search: string;
  products: Product[];
}

export interface MyStateFormPage {
  cards: DataCardForm[];
  status: boolean;
}

export interface MyStateFrom {
  name: React.RefObject<HTMLInputElement>;
  nameERR: boolean;
  brand: React.RefObject<HTMLInputElement>;
  brandERR: boolean;
  description: React.RefObject<HTMLInputElement>;
  descriptionERR: boolean;
  price: React.RefObject<HTMLInputElement>;
  priceERR: boolean;
  date: React.RefObject<HTMLInputElement>;
  dateERR: boolean;
  category: React.RefObject<HTMLSelectElement>;
  categoryERR: boolean;
  photo: React.RefObject<HTMLInputElement>;
  photoERR: boolean;
  strength: React.RefObject<HTMLInputElement>;
  strengthERR: boolean;
  agreement: React.RefObject<HTMLInputElement>;
  agreementERR: boolean;
  form: React.RefObject<HTMLFormElement>;
}

export interface InputValues {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  inputName: string;
  dataTitle: string;
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

export interface DataCardForm {
  name: string;
  brand: string;
  description: string;
  price: string;
  date: string;
  category: string;
  strength: string;
  photo: string;
}
