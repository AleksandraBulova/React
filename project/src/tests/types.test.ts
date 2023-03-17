import MainPage from 'pages/MainPage';
import { Product, Route } from 'types';

describe('Route', () => {
  it('has the correct', () => {
    const route: Route = {
      id: 1,
      name: 'Home',
      path: '/',
      element: MainPage,
    };
    expect(route.id).toEqual(1);
    expect(route.name).toEqual('Home');
    expect(route.path).toEqual('/');
    expect(route.element).toEqual(MainPage);
  });
});

describe('Product', () => {
  it('has the correct', () => {
    const product: Product = {
      id: 1,
      type: 'Wine',
      name: 'Anthilia',
      brand: 'Donnafugata',
      description: 'White, dry, 0.75l., 12.5%, Italy, 2021',
      price: 50,
      stock: 55,
      photo:
        'https://static.simplewine.ru/upload/iblock/ebc/ebc5bbfc489928f37eae2ebb8b88b430.jpg@x430?fmt=webp',
    };
    expect(product.id).toEqual(1);
    expect(product.type).toEqual('Wine');
    expect(product.name).toEqual('Anthilia');
    expect(product.brand).toEqual('Donnafugata');
    expect(product.description).toEqual('White, dry, 0.75l., 12.5%, Italy, 2021');
    expect(product.price).toEqual(50);
    expect(product.stock).toEqual(55);
    expect(product.photo).toEqual(
      'https://static.simplewine.ru/upload/iblock/ebc/ebc5bbfc489928f37eae2ebb8b88b430.jpg@x430?fmt=webp'
    );
  });
});
