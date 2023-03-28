import React, { FC } from 'react';
import styles from './style.module.css';

interface IProp {
  forwardedRef: React.RefObject<HTMLInputElement>;
  error: boolean;
}

export const InputRadio: FC<IProp> = ({ forwardedRef, error }) => {
  const strengths = ['0% - 20%', '20% - 40%', '40% - 60%'];
  return (
    <div className={styles.wrapper}>
      <label className={styles.wrapper_radio}>
        Alcohol strength:
        {strengths.map((elem, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                id={`strength${index}`}
                name="strength"
                value={elem}
                ref={forwardedRef}
              />
              <label htmlFor={`strength${index}`}>{elem}</label>
            </div>
          );
        })}
      </label>
      {error && <div className={styles.error}>Error</div>}
    </div>
  );
};
