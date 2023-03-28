import { Product } from 'types';

export const filtertProducts = (products: Product[], search: string) => {
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase()) ||
      product.type.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()) ||
      String(product.price).includes(search) ||
      String(product.stock).includes(search)
  );
};
