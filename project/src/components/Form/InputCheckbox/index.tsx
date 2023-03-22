import React from 'react';
import styles from './style.module.css';

export class InputCheckbox extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <label>Agreement: </label>
        <div>
          <input type="checkbox" id="1" />
          <label htmlFor="1">I agree with the product posting rules</label>
        </div>
      </div>
    );
  }
}
