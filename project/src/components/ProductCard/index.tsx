import React from 'react';
import { Product } from 'types';
import styles from './style.module.css';

class ProductCard extends React.Component<{ product: Product }> {
  render() {
    return (
      <div className={styles.product}>
        <div
          className={styles.img__item}
          style={{ backgroundImage: `url(${this.props.product.photo[0]})` }}
        />
        <h3 className={styles.product__name}>{this.props.product.name}</h3>
        <ul className={styles.info}>
          <li className={styles.info__brand}>{this.props.product.brand}</li>
          <li className={styles.info__description}>{this.props.product.description}</li>
          <li className={styles.info__category}> {this.props.product.type}</li>
          <li className={styles.info__stock}>Stock: {this.props.product.stock}</li>
          <li className={styles.info__price}>{`${this.props.product.price} $`}</li>
        </ul>
      </div>
    );
  }
}

export default ProductCard;
