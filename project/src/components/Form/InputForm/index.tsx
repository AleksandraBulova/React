import React from 'react';
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

export class InputForm extends React.Component<IProps> {
  render() {
    const { name, type, placeholder, inputName, forwardedRef, error, dataTitle } = this.props;

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
  }
}
