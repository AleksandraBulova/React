import { routeNameAboutUS, routeNameForm, routeNameHome } from 'constants/constants';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import styles from './style.module.css';

interface MyState {
  name: string;
  names: string[];
}

export class Header extends React.Component {
  state: MyState = {
    name: 'Home',
    names: [routeNameHome, routeNameAboutUS, routeNameForm],
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
          {routes.slice(0, routes.length - 1).map((route, index) => {
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
