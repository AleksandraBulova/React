import React, { FC } from 'react';
import { MainLayout } from 'layouts/mainLayout';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { routes } from 'routes';
import { routeName404 } from 'constants/constants';
import styles from './App.module.css';

const App: FC = () => {
  const validRoutes = routes.filter((route) => route.name !== routeName404);
  const Route404 = routes.find((route) => route.name === routeName404)!;

  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <MainLayout>
          <main className={styles.main}>
            <Routes>
              {validRoutes
                .filter((route) => route.name !== routeName404)
                .map((route) => (
                  <Route key={route.id} path={route.path} element={<route.element />} />
                ))}
              <Route path={Route404.path} element={<Route404.element />} />
            </Routes>
          </main>
        </MainLayout>
      </div>
    </BrowserRouter>
  );
};

export default App;
