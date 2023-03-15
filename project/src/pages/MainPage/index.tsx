import ProductCard from 'components/ProductCard';
import { products } from 'products';
import React, { ChangeEvent } from 'react';
import { Product } from 'types';
import styles from './style.module.css';

interface MyState {
  search: string;
  products: Product[];
}

class MainPage extends React.Component {
  state: MyState = {
    search: '',
    products: products,
  };

  componentDidMount(): void {
    const mySearch = localStorage.getItem('search');
    if (mySearch) {
      this.setState((prev) => ({ ...prev, search: mySearch }));
    }
  }

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

  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.search);
  }

  render() {
    return (
      <section className={styles.section_main_page}>
        <header className={styles.header_section}>
          <h3>Search: </h3>
          <input
            className={styles.search}
            type="text"
            value={this.state.search}
            placeholder="  search product"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              this.setState((prev) => ({ ...prev, search: event.target.value }))
            }
          />
        </header>
        <div className={styles.wrapper_products}>
          {this.state.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  }
}

export default MainPage;
