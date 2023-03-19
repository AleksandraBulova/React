import React from 'react';
import styles from './style.module.css';

class Page404 extends React.Component {
  render() {
    return (
      <section className={styles.wrapper}>
        <h1 className={styles.name_error}>404</h1>
        <div className={styles.description_error}>Page not found!</div>
      </section>
    );
  }
}

export default Page404;
