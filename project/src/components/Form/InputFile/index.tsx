import React from 'react';
import styles from './style.module.css';

export class InputFile extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <label>Photo: </label>
        <input type="file" />
      </div>
    );
  }
}
