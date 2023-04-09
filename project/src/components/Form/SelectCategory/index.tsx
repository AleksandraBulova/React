import React, { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './style.module.css';

interface IProp {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const SelectCategory: FC<IProp> = ({ register, errors }) => {
  const categories = ['Wine', 'Whiskey', 'Cognac', 'Vodka'];
  const nameCategory = 'category';
  const error = errors[nameCategory]?.message as string;

  return (
    <div className={styles.wrapper_select}>
      <label>Category: </label>
      <select
        className={styles.select}
        {...register(`${nameCategory}`, {
          required: 'requiered',
        })}
        defaultValue=""
      >
        <option disabled value="">
          Select type of alcohol
        </option>
        {categories.map((elem, index) => {
          return (
            <option key={index} value={elem}>
              {elem}
            </option>
          );
        })}
      </select>
      {errors[nameCategory]?.message && <div className={styles.error}>{error}</div>}
    </div>
  );
};
