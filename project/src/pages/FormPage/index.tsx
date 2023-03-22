import React from 'react';
import { Form } from 'components';
import styles from './style.module.css';

export class FormPage extends React.Component {
  render() {
    return (
      <section className={styles.wrapper_sectio}>
        <Form />
      </section>
    );
  }
}
