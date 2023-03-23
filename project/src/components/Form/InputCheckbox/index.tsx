import React from 'react';
import styles from './style.module.css';

interface IProp {
  forwardedRef: React.RefObject<HTMLInputElement>;
  error: boolean;
}

export class InputCheckbox extends React.Component<IProp> {
  render() {
    return (
      <div className={styles.wrapper}>
        <label>Agreement: </label>
        <div>
          <input type="checkbox" id="1" ref={this.props.forwardedRef} name="agreement" />
          <label htmlFor="1">I agree with the product posting rules</label>
          {this.props.error && <div className={styles.error}>Error</div>}
        </div>
      </div>
    );
  }
}
