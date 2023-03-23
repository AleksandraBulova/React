import React from 'react';
import { InputCheckbox, InputFile, InputForm, InputRadio, SelectCategory } from 'components';
import { inputValues } from 'utils/inputValues';
import styles from './style.module.css';
import { submitForm } from 'utils/submitForm';
import { dataCardForm } from 'types';

interface MyState {
  name: React.RefObject<HTMLInputElement>;
  brand: React.RefObject<HTMLInputElement>;
  description: React.RefObject<HTMLInputElement>;
  price: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  category: React.RefObject<HTMLSelectElement>;
  photo: React.RefObject<HTMLInputElement>;
  strength: React.RefObject<HTMLInputElement>;
  agreement: React.RefObject<HTMLInputElement>;
}

interface IProp {
  habdleSubmitForm: (data: dataCardForm) => void;
}

export class Form extends React.Component<IProp> {
  state: MyState = {
    name: React.createRef(),
    brand: React.createRef(),
    description: React.createRef(),
    price: React.createRef(),
    date: React.createRef(),
    category: React.createRef(),
    photo: React.createRef(),
    strength: React.createRef(),
    agreement: React.createRef(),
  };

  handleSubmit(event: Event) {
    event.preventDefault();
  }

  render() {
    const refValue = [
      this.state.name,
      this.state.brand,
      this.state.description,
      this.state.price,
      this.state.date,
    ];
    return (
      <form
        className={styles.wrapper_form}
        onSubmit={(event) => submitForm(event, this.props.habdleSubmitForm)}
      >
        <div className={styles.container1}>
          {inputValues.map((elem, index) => {
            const { name, type, placeholder, inputName } = elem;
            return (
              <InputForm
                key={index}
                name={name}
                type={type}
                placeholder={placeholder}
                forwardedRef={refValue[index]}
                inputName={inputName}
              />
            );
          })}
        </div>
        <div className={styles.container2}>
          <SelectCategory forwardedRef={this.state.category} />
          <InputFile forwardedRef={this.state.photo} />
          <InputRadio forwardedRef={this.state.strength} />
          <InputCheckbox forwardedRef={this.state.agreement} />
        </div>
        <button className={styles.button_form} type="submit">
          Submit
        </button>
      </form>
    );
  }
}
