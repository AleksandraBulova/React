import React, { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './style.module.css';

interface IProp {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const InputRadio: FC<IProp> = ({ register, errors }) => {
  const strengths = ['0% - 20%', '20% - 40%', '40% - 60%'];
  const nameStrength = 'strength';
  const error = errors[nameStrength]?.message as string;

  return (
    <div className={styles.wrapper}>
      <label className={styles.wrapper_radio}>
        Alcohol strength:
        {strengths.map((elem, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                id={`strength${index}`}
                value={elem}
                {...register(`${nameStrength}`, {
                  required: 'requiered',
                })}
              />
              <label htmlFor={`strength${index}`}>{elem}</label>
            </div>
          );
        })}
      </label>
      {errors[nameStrength]?.message && <div className={styles.error}>{error}</div>}
    </div>
  );
};
