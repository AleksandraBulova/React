import React from 'react';
import styles from './style.module.css';

interface IProps {
  name: string;
  type: string;
  placeholder: string;
  inputName: string;
  forwardedRef: React.RefObject<HTMLInputElement>;
  error: boolean;
}

export class InputForm extends React.Component<IProps> {
  render() {
    const { name, type, placeholder, inputName, forwardedRef, error } = this.props;

    return (
      <div className={styles.wrapper}>
        <label>{name}</label>
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
