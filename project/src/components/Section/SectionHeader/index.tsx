import React, { ChangeEvent, FC } from 'react';
import styles from './style.module.css';

interface IProps {
  search: string;
  setSearch: (value: string) => void;
}

export const SectionHeader: FC<IProps> = ({ search, setSearch }) => {
  return (
    <header className={styles.header_section}>
      <h3>Search: </h3>
      <input
        className={styles.search}
        type="text"
        value={search}
        placeholder="  search product"
        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
      />
    </header>
  );
};
