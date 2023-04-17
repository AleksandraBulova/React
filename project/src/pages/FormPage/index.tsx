import React, { FC } from 'react';
import { CardForm, Form } from 'components';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import styles from './style.module.css';

export const FormPage: FC = () => {
  const { formProducts } = useSelector((state: RootState) => state.products);

  return (
    <section className={styles.wrapper_sectio}>
      <Form />
      <div className={styles.wrapper_cards}>
        {formProducts.map((card, index) => (
          <CardForm key={index} data={card} />
        ))}
      </div>
    </section>
  );
};
