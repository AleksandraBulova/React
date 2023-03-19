import React from 'react';
import { Product } from 'types';
import ProductCard from 'components/ProductCard';
import styles from './style.module.css';

interface IProps {
  products: Product[];
}

class SectionProducts extends React.Component<IProps> {
  render() {
    return (
      <div className={styles.wrapper_products}>
        {this.props.products.length === 0 ? (
          <div className={styles.text_no_products}>No products found!</div>
        ) : (
          this.props.products.map((product) => <ProductCard key={product.id} product={product} />)
        )}
      </div>
    );
  }
}

export default SectionProducts;
