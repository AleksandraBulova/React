import React, { FC } from 'react';
import styles from './style.module.css';

interface IProp {
  forwardedRef: React.RefObject<HTMLSelectElement>;
  error: boolean;
}

export const SelectCategory: FC<IProp> = ({ forwardedRef, error }) => {
  const categories = ['Wine', 'Whiskey', 'Cognac', 'Vodka'];
  return (
    <div className={styles.wrapper_select}>
      <label>Category: </label>
      <select name="category" className={styles.select} ref={forwardedRef} defaultValue="">
        <option disabled value="">
          Select type of alcohol
        </option>
        {categories.map((elem, index) => {
          return (
            <option key={index} value={elem}>
              {elem}
            </option>
          );
        })}
      </select>
      {error && <div className={styles.error}>Error</div>}
    </div>
  );
};
