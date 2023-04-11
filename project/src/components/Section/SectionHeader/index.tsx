import React, { ChangeEvent, FC } from 'react';
import styles from './style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { setSearch } from 'redux/reducers/productsReducer';

export const SectionHeader: FC = () => {
  const { search } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  return (
    <header className={styles.header_section}>
      <h3>Search: </h3>
      <input
        className={styles.search}
        type="text"
        value={search}
        placeholder="  search product"
        onChange={(event: ChangeEvent<HTMLInputElement>) => dispatch(setSearch(event.target.value))}
      />
    </header>
  );
};
