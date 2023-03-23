import React from 'react';
import styles from './style.module.css';

interface IProp {
  forwardedRef: React.RefObject<HTMLInputElement>;
}

export class InputRadio extends React.Component<IProp> {
  render() {
    const strengths = ['0% - 20%', '20% - 40%', '40% - 60%'];
    return (
      <div className={styles.wrapper}>
        <label className={styles.wrapper_radio}>
          Alcohol strength:
          {strengths.map((elem, index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  id={`strength${index}`}
                  name="strength"
                  value={elem}
                  ref={this.props.forwardedRef}
                />
                <label htmlFor={`strength${index}`}>{elem}</label>
              </div>
            );
          })}
        </label>
      </div>
    );
  }
}
