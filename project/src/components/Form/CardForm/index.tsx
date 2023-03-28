import React from 'react';
import { DataCardForm } from 'types';
import styles from './style.module.css';

export class CardForm extends React.Component<{ data: DataCardForm }> {
  render() {
    const { name, brand, description, price, date, category, strength, photo } = this.props.data;

    return (
      <div className={styles.product}>
        <div className={styles.img_item} style={{ backgroundImage: `url(${photo})` }} />
        <h3 className={styles.product_name}>{name}</h3>
        <ul className={styles.info}>
          <li className={styles.info_brand}>{brand}</li>
          <li className={styles.info_date}>{date}</li>
          <li className={styles.info_category}> {category}</li>
          <li className={styles.info_strength}>{strength}</li>
          <li className={styles.info_description}>{description}</li>
          <li className={styles.info_price}>{`${price} $`}</li>
        </ul>
      </div>
    );
  }
}
