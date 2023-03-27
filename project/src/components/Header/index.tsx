import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';
import styles from './style.module.css';

export const Header: FC = () => {
  const headerRoutes = routes.slice(0, routes.length - 1);
  const { pathname } = useLocation();

  const routeTitle = routes.find((route) => route.path === pathname)?.name || '404';

  return (
    <header className={styles.header}>
      <h1>{routeTitle}</h1>
      <div className={styles.wrapper_button}>
        {headerRoutes.map((route, index) => {
          return (
            <Link key={index} to={route.path}>
              <button className={styles.button}>{route.name}</button>
            </Link>
          );
        })}
      </div>
    </header>
  );
};
