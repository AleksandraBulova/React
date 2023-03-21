import React from 'react';
import { Product } from 'types';
import styles from './style.module.css';

export class ProductCard extends React.Component<{ product: Product }> {
  render() {
    const { name, brand, type, description, stock, price, photo } = this.props.product;

    return (
      <div className={styles.product}>
        <div className={styles.img_item} style={{ backgroundImage: `url(${photo})` }} />
        <h3 className={styles.product_name}>{name}</h3>
        <ul className={styles.info}>
          <li className={styles.info_brand}>{brand}</li>
          <li className={styles.info_description}>{description}</li>
          <li className={styles.info_category}> {type}</li>
          <li className={styles.info_stock}>Stock: {stock}</li>
          <li className={styles.info_price}>{`${price} $`}</li>
        </ul>
      </div>
    );
  }
}
