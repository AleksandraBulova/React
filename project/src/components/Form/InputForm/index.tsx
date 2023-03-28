import React, { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { InputValue } from 'types';
import styles from './style.module.css';

interface IProps {
  inputValue: InputValue;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const InputForm: FC<IProps> = ({ inputValue, register, errors }) => {
  const { name, type, placeholder, inputName, dataTitle, validation } = inputValue;

  const error = errors[inputName]?.message as string;

  return (
    <div className={styles.wrapper}>
      <label title={dataTitle}>{name}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...register(`${inputName}`, validation)}
      />
      {errors[inputName]?.message && <div className={styles.error}>{error}</div>}
    </div>
  );
};
