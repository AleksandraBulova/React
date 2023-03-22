import { Route } from 'types';
import { MainPage, AboutPage, FormPage, Page404 } from 'pages';
import { routeNameAboutUS, routeNameForm, routeNameHome, routeName404 } from 'constants/constants';

export const routes: Route[] = [
  {
    id: 1,
    name: routeNameHome,
    path: '/',
    element: MainPage,
  },
  {
    id: 2,
    name: routeNameAboutUS,
    path: '/aboutUs',
    element: AboutPage,
  },
  {
    id: 3,
    name: routeNameForm,
    path: '/form',
    element: FormPage,
  },
  {
    id: 4,
    name: routeName404,
    path: '*',
    element: Page404,
  },
];
