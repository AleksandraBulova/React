import React from 'react';
import { InputCheckbox, InputFile, InputForm, InputRadio, SelectCategory } from 'components';
import { inputValues } from 'utils/inputValues';
import styles from './style.module.css';

export class Form extends React.Component {
  render() {
    return (
      <form className={styles.wrapper_form}>
        <div className={styles.container1}>
          {inputValues.map((elem, index) => {
            const { name, type, placeholder } = elem;
            return (
              <InputForm
                key={index}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={() => null}
              />
            );
          })}
        </div>
        <div className={styles.container2}>
          <SelectCategory />
          <InputFile />
          <InputRadio />
          <InputCheckbox />
        </div>
        <button className={styles.button_form} type="submit">
          Submit
        </button>
      </form>
    );
  }
}
