import React, { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './style.module.css';

interface IProp {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const InputFile: FC<IProp> = ({ register, errors }) => {
  const namePhoto = 'photo';
  const error = errors[namePhoto]?.message as string;

  return (
    <div className={styles.wrapper}>
      <label>Photo: </label>
      <input
        type="file"
        {...register(`${namePhoto}`, {
          required: 'requiered',
        })}
      />
      {errors[namePhoto]?.message && <div className={styles.error}>{error}</div>}
    </div>
  );
};
