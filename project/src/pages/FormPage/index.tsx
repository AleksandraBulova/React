import React from 'react';
import { CardForm, Form } from 'components';
import styles from './style.module.css';
import { MyStateFormPage, DataCardForm } from 'types';

export class FormPage extends React.Component {
  state: MyStateFormPage = {
    cards: [],
    status: false,
  };

  componentDidUpdate(prevProps: MyStateFormPage, prevState: MyStateFormPage): void {
    if (prevState.cards !== this.state.cards) {
      this.setState((prev) => ({ ...prev, status: true }));
      setTimeout(() => {
        this.setState((prev) => ({ ...prev, status: false }));
      }, 2500);
    }
  }

  render() {
    const habdleSubmitForm = (data: DataCardForm) => {
      this.setState((prev) => ({ ...prev, cards: [...this.state.cards, data] }));
    };

    return (
      <section className={styles.wrapper_sectio}>
        <Form habdleSubmitForm={habdleSubmitForm} />
        {this.state.status && <div className={styles.status}>Card added</div>}
        <div className={styles.wrapper_cards}>
          {this.state.cards.map((card, index) => (
            <CardForm key={index} data={card} />
          ))}
        </div>
      </section>
    );
  }
}
