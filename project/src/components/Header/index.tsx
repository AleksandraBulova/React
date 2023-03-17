import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { Route } from 'types';
import styles from './style.module.css';

const [MainPage, AboutUs]: Route[] = routes;

interface MyState {
  name: string;
}

class Header extends React.Component {
  state: MyState = {
    name: 'Home',
  };

  //Mounting
  componentDidMount(): void {
    const myName = localStorage.getItem('namePage');
    if (myName) {
      this.setState((prev) => ({ ...prev, name: myName }));
    }

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('namePage', this.state.name);
    });
  }

  //Unmount
  componentWillUnmount(): void {
    localStorage.setItem('namePage', this.state.name);
  }

  render() {
    return (
      <header className={styles.header}>
        <h1>{this.state.name}</h1>
        <div className={styles.wrapper_button}>
          <Link to={MainPage.path}>
            <button
              className={styles.button}
              onClick={() => this.setState((prev) => ({ ...prev, name: 'Home' }))}
            >
              Home
            </button>
          </Link>
          <Link to={AboutUs.path}>
            <button
              className={styles.button}
              onClick={() => this.setState((prev) => ({ ...prev, name: 'About US' }))}
            >
              About Us
            </button>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
