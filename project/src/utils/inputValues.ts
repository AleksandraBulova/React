import { InputValue } from 'types';

export const inputValues: InputValue[] = [
  {
    name: 'Name:',
    type: 'text',
    value: '',
    placeholder: 'name alcohol',
    inputName: 'name',
    dataTitle: 'name starts with uppercase letter and 3 <= name length <= 25',
    validation: {
      required: 'requiered',
      minLength: {
        value: 3,
        message: 'min 3 letters',
      },
      maxLength: {
        value: 25,
        message: 'max 25 letters',
      },
      validate: {
        firstLetterUpperCase: (value: string) =>
          value.at(0) !== value.at(0)?.toUpperCase() ? '1st capital letter' : undefined,
        onlyLetters: (value: string) => {
          const onlyChars = new RegExp(/^[^\d\s]+([ ]?[^\d\s]+)*$/);
          return onlyChars.test(value) ? undefined : 'only letters';
        },
      },
    },
  },
  {
    name: 'Brand:',
    type: 'text',
    value: '',
    placeholder: 'brand alcohol',
    inputName: 'brand',
    dataTitle: 'brand starts with uppercased letter and 3 <= brand length <= 25',
    validation: {
      required: 'requiered',
      minLength: {
        value: 3,
        message: 'min 3 letters',
      },
      maxLength: {
        value: 25,
        message: 'max 25 letters',
      },
      validate: {
        firstLetterUpperCase: (value: string) =>
          value.at(0) !== value.at(0)?.toUpperCase() ? '1st capital letter' : undefined,
        onlyLetters: (value: string) => {
          const onlyChars = new RegExp(/^[^\d\s]+([ ]?[^\d\s]+)*$/);
          return onlyChars.test(value) ? undefined : 'only letters';
        },
      },
    },
  },
  {
    name: 'Description:',
    type: 'text',
    value: '',
    placeholder: 'description alcohol',
    inputName: 'description',
    dataTitle: 'at least 2 words and description length < 40',
    validation: {
      required: 'requiered',
      maxLength: {
        value: 40,
        message: 'max 40 symbols',
      },
      validate: {
        twoWords: (value: string) => {
          const valueArray = value.split(' ');
          return valueArray.length >= 2 && valueArray[1].length > 0 ? undefined : 'min 2 words';
        },
      },
    },
  },
  {
    name: 'Price:',
    type: 'number',
    value: '',
    placeholder: 'price alcohol',
    inputName: 'price',
    dataTitle: 'positive numbers and price length < 25',
    validation: {
      required: 'requiered',
      maxLength: {
        value: 25,
        message: 'max 25 numbers',
      },
      validate: {
        positiveNumbers: (value: string) => (+value >= 0 ? undefined : 'positive numbers'),
      },
    },
  },
  {
    name: 'Date release:',
    type: 'date',
    value: '',
    placeholder: 'date alcohol',
    inputName: 'date',
    dataTitle: '',
    validation: {
      required: 'requiered',
    },
  },
];
