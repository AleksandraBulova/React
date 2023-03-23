import React from 'react';
import { CardForm, Form } from 'components';
import styles from './style.module.css';
import { dataCardForm } from 'types';

interface MyState {
  cards: dataCardForm[];
}

export class FormPage extends React.Component {
  state: MyState = {
    cards: [],
  };

  render() {
    const habdleSubmitForm = (data: dataCardForm) => {
      this.setState((prev) => ({ ...prev, cards: [...this.state.cards, data] }));
    };

    return (
      <section className={styles.wrapper_sectio}>
        <Form habdleSubmitForm={habdleSubmitForm} />
        <div className={styles.wrapper_cards}>
          {this.state.cards.map((card, index) => (
            <CardForm key={index} data={card} />
          ))}
        </div>
      </section>
    );
  }
}
