import { FC } from 'react';
import { FieldValues, RegisterOptions } from 'react-hook-form';

export interface Route {
  id: number;
  name: string;
  path: string;
  element: FC;
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

export interface MyStateFormPage {
  cards: FieldValues[];
  status: boolean;
}

export interface InputValue {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  inputName: string;
  dataTitle: string;
  validation: RegisterOptions;
}
