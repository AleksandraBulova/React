import MainLayout from 'layouts/mainLayout';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { routes } from 'routes';
import styles from './App.module.css';

class App extends React.Component {
  validRoutes = routes.filter((route) => route.name !== '404');
  Route404 = routes.find((route) => route.name === '404')!;

  render() {
    return (
      <BrowserRouter>
        <div className={styles.wrapper}>
          <MainLayout>
            <main className={styles.main}>
              <Routes>
                {this.validRoutes
                  .filter((route) => route.name !== '404')
                  .map((route) => (
                    <Route key={route.id} path={route.path} element={<route.element />} />
                  ))}
                <Route path={this.Route404.path} element={<this.Route404.element />} />
              </Routes>
            </main>
          </MainLayout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
