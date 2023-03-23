import React from 'react';
import { InputCheckbox, InputFile, InputForm, InputRadio, SelectCategory } from 'components';
import { inputValues } from 'utils/inputValues';
import styles from './style.module.css';
import { submitForm } from 'utils/submitForm';
import { MyStateFrom, DataCardForm } from 'types';

interface IProp {
  habdleSubmitForm: (data: DataCardForm) => void;
}

export class Form extends React.Component<IProp> {
  state: MyStateFrom = {
    name: React.createRef(),
    nameERR: false,
    brand: React.createRef(),
    brandERR: false,
    description: React.createRef(),
    descriptionERR: false,
    price: React.createRef(),
    priceERR: false,
    date: React.createRef(),
    dateERR: false,
    category: React.createRef(),
    categoryERR: false,
    photo: React.createRef(),
    photoERR: false,
    strength: React.createRef(),
    strengthERR: false,
    agreement: React.createRef(),
    agreementERR: false,
    form: React.createRef(),
  };

  setError = (nameState: string, value: boolean) => {
    this.setState((prev) => ({ ...prev, [nameState]: value }));
  };

  render() {
    const refValue = [
      this.state.name,
      this.state.brand,
      this.state.description,
      this.state.price,
      this.state.date,
    ];
    const errors = [
      this.state.nameERR,
      this.state.brandERR,
      this.state.descriptionERR,
      this.state.priceERR,
      this.state.dateERR,
    ];
    return (
      <form
        className={styles.wrapper_form}
        ref={this.state.form}
        onSubmit={(event) =>
          submitForm(event, this.props.habdleSubmitForm, this.setError, this.state.form)
        }
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
                error={errors[index]}
              />
            );
          })}
        </div>
        <div className={styles.container2}>
          <SelectCategory forwardedRef={this.state.category} error={this.state.categoryERR} />
          <InputFile forwardedRef={this.state.photo} error={this.state.photoERR} />
          <InputRadio forwardedRef={this.state.strength} error={this.state.strengthERR} />
          <InputCheckbox forwardedRef={this.state.agreement} error={this.state.agreementERR} />
        </div>
        <button className={styles.button_form} type="submit">
          Submit
        </button>
      </form>
    );
  }
}
