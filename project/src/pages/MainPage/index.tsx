import React from 'react';
import { SectionHeader, SectionProducts } from 'components';
import { products } from 'products';
import { MyStateMainPage } from 'types';
import styles from './style.module.css';
import { filtertProducts } from 'utils/filtertProducts';

export class MainPage extends React.Component {
  state: MyStateMainPage = {
    search: '',
    products: products,
  };

  beforeunload = () => {
    localStorage.setItem('search', this.state.search);
  };

  //Mounting
  componentDidMount(): void {
    const mySearch = localStorage.getItem('search');
    if (mySearch) {
      this.setState((prev) => ({ ...prev, search: mySearch }));
    }

    window.addEventListener('beforeunload', this.beforeunload);
  }

  //Update
  componentDidUpdate(prevProps: MyStateMainPage, prevState: MyStateMainPage): void {
    if (prevState.search !== this.state.search) {
      const newProducts = filtertProducts(products, this.state.search);
      this.setState((prev) => ({ ...prev, products: newProducts }));
    }
  }

  //Unmount
  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.search);
    window.removeEventListener('beforeunload', this.beforeunload);
  }

  setSearch = (value: string) => {
    this.setState((prev) => ({ ...prev, search: value }));
  };

  render() {
    return (
      <section className={styles.section_main_page}>
        <SectionHeader search={this.state.search} setSearch={this.setSearch} />
        <SectionProducts products={this.state.products} />
      </section>
    );
  }
}
