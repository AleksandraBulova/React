import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { ProductCard } from 'components';
import styles from './style.module.css';

export const SectionProducts: FC = () => {
  const { viewProducts } = useSelector((state: RootState) => state.products);

  return (
    <div className={styles.wrapper_products}>
      {viewProducts.length ? (
        viewProducts.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <div className={styles.text_no_products}>No products found!</div>
      )}
    </div>
  );
};
