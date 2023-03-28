import React from 'react';
import { Product } from 'types';
import { ProductCard } from 'components';
import styles from './style.module.css';

interface IProps {
  products: Product[];
}

export class SectionProducts extends React.Component<IProps> {
  render() {
    return (
      <div className={styles.wrapper_products}>
        {this.props.products.length ? (
          this.props.products.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className={styles.text_no_products}>No products found!</div>
        )}
      </div>
    );
  }
}
