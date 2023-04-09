export const getProducts = () => {
  return fetch(`https://dummyjson.com/products`)
    .then((res) => res.json())
    .then((data) => data.products);
};

export const getProductsSearch = (search: string) => {
  return fetch(`https://dummyjson.com/products/search?q=${search}`)
    .then((res) => res.json())
    .then((data) => data.products);
};

export const getProductDetails = (productId: number) => {
  return fetch(`https://dummyjson.com/products/${productId}`).then((res) => res.json());
};
