import React from 'react';
import styles from './style.module.css';

interface IProp {
  forwardedRef: React.RefObject<HTMLInputElement>;
  error: boolean;
}

export class InputFile extends React.Component<IProp> {
  render() {
    return (
      <div className={styles.wrapper}>
        <label>Photo: </label>
        <input type="file" name="photo" ref={this.props.forwardedRef} />
        {this.props.error && <div className={styles.error}>Error</div>}
      </div>
    );
  }
}
