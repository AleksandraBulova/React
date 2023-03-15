import ProductCard from 'components/ProductCard';
import { products } from 'products';
import React, { ChangeEvent } from 'react';
import styles from './style.module.css';

interface MyState {
  search: string;
}

class MainPage extends React.Component {
  state: MyState = {
    search: '',
  };

  componentDidMount(): void {
    const mySearch = localStorage.getItem('search');
    if (mySearch) {
      this.setState((prev) => ({ ...prev, search: mySearch }));
    }
  }

  componentDidUpdate(prevState: Readonly<MyState>): void {
    if (prevState.search !== this.state.search) {
      console.log('componentDidUpdate, search');
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  }
}

export default MainPage;
