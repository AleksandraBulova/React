import React, { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { InputForm, SelectCategory, InputFile, InputRadio, InputCheckbox } from 'components';
import { inputValues } from 'utils/inputValues';
import styles from './style.module.css';
import { convertToImageUrl } from 'utils/convertToImageUrl';

interface IProp {
  setCards: (data: FieldValues) => void;
}

export const Form: FC<IProp> = ({ setCards }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onSubmit' });

  const habdleSubmitForm = (data: FieldValues) => {
    convertToImageUrl(data.photo).then((res) => {
      data.photo = res;
      setCards(data);
    });
    reset();
  };

  return (
    <form className={styles.wrapper_form} onSubmit={handleSubmit(habdleSubmitForm)}>
      <div className={styles.container1}>
        {inputValues.map((elem, index) => {
          return <InputForm key={index} inputValue={elem} register={register} errors={errors} />;
        })}
      </div>
      <div className={styles.container2}>
        <SelectCategory register={register} errors={errors} />
        <InputFile register={register} errors={errors} />
        <InputRadio register={register} errors={errors} />
        <InputCheckbox register={register} errors={errors} />
      </div>
      <button className={styles.button_form} type="submit">
        Submit
      </button>
    </form>
  );
};
