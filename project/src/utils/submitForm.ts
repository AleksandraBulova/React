import { FormElements, DataCardForm } from 'types';

export const submitForm = async (
  event: React.FormEvent<HTMLFormElement>,
  habdleSubmitForm: (data: DataCardForm) => void,
  setError: (nameState: string, value: boolean) => void,
  form: React.RefObject<HTMLFormElement>
) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  const elements = target.elements as FormElements;
  const data: DataCardForm = {
    name: '',
    brand: '',
    description: '',
    price: '',
    date: '',
    category: '',
    strength: '',
    photo: '',
  };
  const check = {
    name: false,
    brand: false,
    description: false,
    price: false,
    date: false,
    category: false,
    strength: false,
  };

  const onlyChars = new RegExp(/^([^0-9]*)$/);

  if (
    elements.name.value &&
    elements.name.value.length >= 3 &&
    elements.name.value.length < 25 &&
    elements.name.value[0] === elements.name.value[0].toUpperCase() &&
    onlyChars.test(elements.name.value)
  ) {
    data.name = elements.name.value;
    check.name = true;
    setError('nameERR', false);
  } else {
    setError('nameERR', true);
  }

  if (
    elements.brand.value &&
    elements.brand.value.length >= 3 &&
    elements.brand.value.length < 25 &&
    elements.brand.value[0] === elements.brand.value[0].toUpperCase() &&
    onlyChars.test(elements.brand.value)
  ) {
    data.brand = elements.brand.value;
    check.brand = true;
    setError('brandERR', false);
  } else {
    setError('brandERR', true);
  }

  if (
    elements.description.value &&
    elements.description.value.split(' ').length >= 2 &&
    elements.description.value.length < 40
  ) {
    data.description = elements.description.value;
    check.description = true;
    setError('descriptionERR', false);
  } else {
    setError('descriptionERR', true);
  }

  if (elements.price.value && +elements.price.value >= 0 && elements.price.value.length < 25) {
    data.price = elements.price.value;
    check.price = true;
    setError('priceERR', false);
  } else {
    setError('priceERR', true);
  }

  if (elements.date.value) {
    data.date = elements.date.value;
    check.date = true;
    setError('dateERR', false);
  } else {
    setError('dateERR', true);
  }

  if (elements.category.value) {
    data.category = elements.category.value;
    check.category = true;
    setError('categoryERR', false);
  } else {
    setError('categoryERR', true);
  }

  if (elements.strength.value) {
    data.strength = elements.strength.value;
    check.strength = true;
    setError('strengthERR', false);
  } else {
    setError('strengthERR', true);
  }

  if (elements.agreement.checked) {
    setError('agreementERR', false);
  } else {
    setError('agreementERR', true);
  }

  if (elements.photo.files) {
    if (elements.photo.files.length) {
      const fr = new FileReader();
      const file = elements.photo.files[0];
      fr.readAsArrayBuffer(file);
      fr.onload = function () {
        if (fr.result) {
          const blob = new Blob([fr.result]);
          const url = URL.createObjectURL(blob);
          data.photo = url;
          if (
            check.name &&
            check.brand &&
            check.description &&
            check.price &&
            check.date &&
            check.category &&
            check.strength &&
            elements.agreement.checked
          ) {
            habdleSubmitForm(data);
            form.current?.reset();
          }
        }
      };
      setError('photoERR', false);
    } else {
      setError('photoERR', true);
    }
  }
};
