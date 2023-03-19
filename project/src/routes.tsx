import { Route } from 'types';
import MainPage from './pages/MainPage';
import AboutPage from 'pages/AboutPage';
import Page404 from './pages/404';

export const routes: Route[] = [
  {
    id: 1,
    name: 'Main',
    path: '/',
    element: MainPage,
  },
  {
    id: 2,
    name: 'About',
    path: '/aboutUs',
    element: AboutPage,
  },
  {
    id: 3,
    name: '404',
    path: '*',
    element: Page404,
  },
];
