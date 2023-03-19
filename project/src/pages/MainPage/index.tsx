import React from 'react';
import SectionHeader from 'components/Section/SectionHeader';
import SectionProducts from 'components/Section/SectionProducts';
import { products } from 'products';
import { Product } from 'types';
import styles from './style.module.css';

export interface MyState {
  search: string;
  products: Product[];
}

class MainPage extends React.Component {
  state: MyState = {
    search: '',
    products: products,
  };

  //Mounting
  componentDidMount(): void {
    const mySearch = localStorage.getItem('search');
    if (mySearch) {
      this.setState((prev) => ({ ...prev, search: mySearch }));
    }

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('search', this.state.search);
    });
  }

  //Update
  componentDidUpdate(prevProps: MyState, prevState: MyState): void {
    if (prevState.search !== this.state.search) {
      const newProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
          product.brand.toLowerCase().includes(this.state.search.toLowerCase()) ||
          product.type.toLowerCase().includes(this.state.search.toLowerCase()) ||
          product.description.toLowerCase().includes(this.state.search.toLowerCase()) ||
          String(product.price).includes(this.state.search) ||
          String(product.stock).includes(this.state.search)
      );
      this.setState((prev) => ({ ...prev, products: newProducts }));
    }
  }

  //Unmount
  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.search);
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

export default MainPage;
