import React, { FC } from 'react';
import styles from './style.module.css';

interface IProp {
  forwardedRef: React.RefObject<HTMLInputElement>;
  error: boolean;
}

export const InputCheckbox: FC<IProp> = ({ forwardedRef, error }) => {
  return (
    <div className={styles.wrapper}>
      <label>Agreement: </label>
      <div>
        <input type="checkbox" id="1" ref={forwardedRef} name="agreement" />
        <label htmlFor="1">I agree with the product posting rules</label>
        {error && <div className={styles.error}>Error</div>}
      </div>
    </div>
  );
};
