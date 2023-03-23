import { dataCardForm, FormElements } from 'types';

export const submitForm = async (
  event: React.FormEvent<HTMLFormElement>,
  habdleSubmitForm: (data: dataCardForm) => void
) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  const elements = target.elements as FormElements;
  const data: dataCardForm = {
    name: '',
    brand: '',
    description: '',
    price: '',
    date: '',
    category: '',
    strength: '',
    photo: '',
  };
  // const dates = ['name', 'brand', 'description', 'price', 'date', 'category', 'strength', 'photo'];

  // dates.map((elem) => {
  //   if (elements[elem].value) {
  //     data[elem] = elements[elem].value;
  //   }
  // });

  if (elements.name.value) {
    data.name = elements.name.value;
  } else {
    console.log('name');
  }

  if (elements.brand.value) {
    data.brand = elements.brand.value;
  } else {
    console.log('brand');
  }

  if (elements.description.value) {
    data.description = elements.description.value;
  } else {
    console.log('description');
  }

  if (elements.price.value) {
    data.price = elements.price.value;
  } else {
    console.log('price');
  }

  if (elements.date.value) {
    data.date = elements.date.value;
  } else {
    console.log('date');
  }

  if (elements.category.value) {
    data.category = elements.category.value;
  } else {
    console.log('category');
  }

  if (elements.strength.value) {
    data.strength = elements.strength.value;
  } else {
    console.log('strength');
  }

  if (elements.agreement.checked) {
    if (elements.photo.files) {
      const fr = new FileReader();
      const file = elements.photo.files[0];
      fr.readAsArrayBuffer(file);
      fr.onload = function () {
        if (fr.result) {
          const blob = new Blob([fr.result]);
          const url = URL.createObjectURL(blob);
          data.photo = url;
          habdleSubmitForm(data);
        }
      };
    } else {
      console.log('photo');
    }
  } else {
    console.log('agreement');
  }
};
