import React from 'react';
import styles from './style.module.css';

interface IProp {
  forwardedRef: React.RefObject<HTMLInputElement>;
}

export class InputFile extends React.Component<IProp> {
  render() {
    return (
      <div className={styles.wrapper}>
        <label>Photo: </label>
        <input type="file" name="photo" ref={this.props.forwardedRef} />
      </div>
    );
  }
}
