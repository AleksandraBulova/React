import React, { FC } from 'react';
import styles from './style.module.css';

interface IProps {
  name: string;
  type: string;
  placeholder: string;
  inputName: string;
  forwardedRef: React.RefObject<HTMLInputElement>;
  error: boolean;
  dataTitle: string;
}

export const InputForm: FC<IProps> = ({
  name,
  type,
  placeholder,
  inputName,
  forwardedRef,
  error,
  dataTitle,
}) => {
  return (
    <div className={styles.wrapper}>
      <label title={dataTitle}>{name}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        ref={forwardedRef}
        name={inputName}
      />
      {error && <div className={styles.error}>Error</div>}
    </div>
  );
};
