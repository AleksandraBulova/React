import React from 'react';
import styles from './style.module.css';

interface IProps {
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export class InputForm extends React.Component<IProps> {
  render() {
    const { name, type, placeholder, onChange } = this.props;

    return (
      <div className={styles.wrapper}>
        <label>{name}</label>
        <input className={styles.input} type={type} placeholder={placeholder} onChange={onChange} />
      </div>
    );
  }
}
