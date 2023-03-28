import React from 'react';
import styles from './style.module.css';

interface IProp {
  forwardedRef: React.RefObject<HTMLSelectElement>;
  error: boolean;
}

export class SelectCategory extends React.Component<IProp> {
  render() {
    const categories = ['Wine', 'Whiskey', 'Cognac', 'Vodka'];
    return (
      <div className={styles.wrapper_select}>
        <label>Category: </label>
        <select
          name="category"
          className={styles.select}
          ref={this.props.forwardedRef}
          defaultValue=""
        >
          <option disabled value="">
            Select type of alcohol
          </option>
          {categories.map((elem, index) => {
            return (
              <option key={index} value={elem}>
                {elem}
              </option>
            );
          })}
        </select>
        {this.props.error && <div className={styles.error}>Error</div>}
      </div>
    );
  }
}
