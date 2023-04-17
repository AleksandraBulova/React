import React, { FC } from 'react';
import { SectionHeader, SectionProducts } from 'components';
import styles from './style.module.css';

export const MainPage: FC = () => {
  return (
    <section className={styles.section_main_page}>
      <SectionHeader />
      <SectionProducts />
    </section>
  );
};
