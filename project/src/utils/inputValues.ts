import { InputValues } from 'types';

export const inputValues: InputValues[] = [
  {
    name: 'Name:',
    type: 'text',
    value: '',
    placeholder: 'name alcohol',
    inputName: 'name',
    dataTitle: 'name starts with uppercased letter and 3 <= name length < 25',
  },
  {
    name: 'Brand:',
    type: 'text',
    value: '',
    placeholder: 'brand alcohol',
    inputName: 'brand',
    dataTitle: 'brand starts with uppercased letter and 3 <= brand length < 25',
  },
  {
    name: 'Description:',
    type: 'text',
    value: '',
    placeholder: 'description alcohol',
    inputName: 'description',
    dataTitle: 'at least 2 words and description length < 40',
  },
  {
    name: 'Price:',
    type: 'number',
    value: '',
    placeholder: 'price alcohol',
    inputName: 'price',
    dataTitle: 'positive numbers and price length < 25',
  },
  {
    name: 'Date release:',
    type: 'date',
    value: '',
    placeholder: 'date alcohol',
    inputName: 'date',
    dataTitle: '',
  },
];
