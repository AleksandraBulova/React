import React, { FC } from 'react';
import styles from './style.module.css';

interface IProp {
  forwardedRef: React.RefObject<HTMLInputElement>;
  error: boolean;
}

export const InputFile: FC<IProp> = ({ forwardedRef, error }) => {
  return (
    <div className={styles.wrapper}>
      <label>Photo: </label>
      <input type="file" name="photo" ref={forwardedRef} />
      {error && <div className={styles.error}>Error</div>}
    </div>
  );
};
