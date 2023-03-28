import React, { FC, useEffect, useRef, useState } from 'react';
import { SectionHeader, SectionProducts } from 'components';
import { products } from 'products';
import styles from './style.module.css';
import { filtertProducts } from 'utils/filtertProducts';

export const MainPage: FC = () => {
  const [state, setState] = useState(() => {
    const initialSearch = localStorage.getItem('search') || '';
    const initialProducts = initialSearch ? filtertProducts(products, initialSearch) : products;

    return {
      search: initialSearch,
      products: initialProducts,
    };
  });

  const inputValue = useRef(state.search);

  //Mounting
  useEffect(() => {
    const beforeunload = () => {
      localStorage.setItem('search', inputValue.current);
    };

    window.addEventListener('beforeunload', beforeunload);

    //Unmount
    return () => {
      localStorage.setItem('search', inputValue.current);
      window.removeEventListener('beforeunload', beforeunload);
    };
  }, []);

  //Update
  useEffect(() => {
    if (state.search) {
      const newProducts = filtertProducts(products, state.search);
      setState((prev) => ({ ...prev, products: newProducts }));
    }
    inputValue.current = state.search;
  }, [state.search]);

  const setSearch = (value: string) => {
    setState((prev) => ({ ...prev, search: value }));
  };

  return (
    <section className={styles.section_main_page}>
      <SectionHeader search={state.search} setSearch={setSearch} />
      <SectionProducts products={state.products} />
    </section>
  );
};
