import React, { FC } from 'react';
import { Product } from 'types';
import { ProductCard } from 'components';
import styles from './style.module.css';

interface IProps {
  products: Product[];
}

export const SectionProducts: FC<IProps> = ({ products }) => {
  return (
    <div className={styles.wrapper_products}>
      {products.length ? (
        products.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <div className={styles.text_no_products}>No products found!</div>
      )}
    </div>
  );
};
