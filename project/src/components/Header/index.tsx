import { routeNameAboutUS, routeNameForm, routeNameHome } from 'constants/constants';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { MyStateHeader } from 'types';
import styles from './style.module.css';

export class Header extends React.Component {
  state: MyStateHeader = {
    name: 'Home',
    names: [routeNameHome, routeNameAboutUS, routeNameForm],
  };

  routesForHeader = routes.slice(0, routes.length - 1);

  beforeunload = () => {
    localStorage.setItem('namePage', this.state.name);
  };

  //Mounting
  componentDidMount(): void {
    const myName = localStorage.getItem('namePage');
    if (myName) {
      this.setState((prev) => ({ ...prev, name: myName }));
    }

    window.addEventListener('beforeunload', this.beforeunload);
  }

  //Unmount
  componentWillUnmount(): void {
    localStorage.setItem('namePage', this.state.name);
    window.removeEventListener('beforeunload', this.beforeunload);
  }

  render() {
    return (
      <header className={styles.header}>
        <h1>{this.state.name}</h1>
        <div className={styles.wrapper_button}>
          {this.routesForHeader.map((route, index) => {
            return (
              <Link key={index} to={route.path}>
                <button
                  className={styles.button}
                  id={`button-${this.state.names[index]}`}
                  onClick={() =>
                    this.setState((prev) => ({ ...prev, name: this.state.names[index] }))
                  }
                >
                  {this.state.names[index]}
                </button>
              </Link>
            );
          })}
        </div>
      </header>
    );
  }
}
