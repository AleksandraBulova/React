import React from 'react';
import { Form } from 'components';
import styles from './style.module.css';
import { dataCardForm } from 'types';

export class FormPage extends React.Component {
  render() {
    const habdleSubmitForm = (data: dataCardForm) => {
      console.log(data, 'создание новой карточки с датой');
    };

    return (
      <section className={styles.wrapper_sectio}>
        <Form habdleSubmitForm={habdleSubmitForm} />
      </section>
    );
  }
}
