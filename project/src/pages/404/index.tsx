import React, { FC } from 'react';
import styles from './style.module.css';

export const Page404: FC = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.name_error}>404</h1>
      <div className={styles.description_error}>Page not found!</div>
    </section>
  );
};
