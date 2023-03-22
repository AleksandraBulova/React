import React from 'react';
import styles from './style.module.css';

export class SelectCategory extends React.Component {
  render() {
    const categories = ['Wine', 'Whiskey', 'Cognac', 'Vodka'];
    return (
      <div className={styles.wrapper_select}>
        <label>Category: </label>
        <select name="alcohol" className={styles.select}>
          <option disabled>Select type of alcohol</option>
          {categories.map((elem, index) => {
            return (
              <option key={index} value={elem}>
                {elem}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
