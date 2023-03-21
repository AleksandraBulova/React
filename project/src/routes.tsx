import { Route } from 'types';
import { MainPage, AboutPage, Page404 } from 'pages';

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
