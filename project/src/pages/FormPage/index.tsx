import React, { FC, useEffect, useState } from 'react';
import { CardForm, Form } from 'components';
import styles from './style.module.css';
import { MyStateFormPage, DataCardForm } from 'types';

export const FormPage: FC = () => {
  const [state, setState] = useState<MyStateFormPage>({
    cards: [],
    status: false,
  });

  useEffect(() => {
    if (state.cards.length) {
      setState((prev) => ({ ...prev, status: true }));
      setTimeout(() => {
        setState((prev) => ({ ...prev, status: false }));
      }, 2500);
    }
  }, [state.cards]);

  const habdleSubmitForm = (data: DataCardForm) => {
    setState((prev) => ({ ...prev, cards: [...state.cards, data] }));
  };

  return (
    <section className={styles.wrapper_sectio}>
      <Form habdleSubmitForm={habdleSubmitForm} />
      {state.status && <div className={styles.status}>Card added</div>}
      <div className={styles.wrapper_cards}>
        {state.cards.map((card, index) => (
          <CardForm key={index} data={card} />
        ))}
      </div>
    </section>
  );
};
