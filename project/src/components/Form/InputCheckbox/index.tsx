import React, { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './style.module.css';

interface IProp {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const InputCheckbox: FC<IProp> = ({ register, errors }) => {
  const nameAgreement = 'agreement';
  const error = errors[nameAgreement]?.message as string;

  return (
    <div className={styles.wrapper}>
      <label>Agreement: </label>
      <div>
        <input
          type="checkbox"
          id="1"
          {...register(`${nameAgreement}`, {
            required: 'requiered',
          })}
        />
        <label htmlFor="1">I agree with the product posting rules</label>
        {errors[nameAgreement]?.message && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
};
