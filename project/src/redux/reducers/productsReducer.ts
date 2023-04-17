import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';
import { products } from 'products';
import { FieldValues } from 'react-hook-form';

export interface ProductsState {
  products: Product[];
  viewProducts: Product[];
  search: string;
  formProducts: FieldValues[];
}

const initialState: ProductsState = {
  products,
  viewProducts: products,
  search: '',
  formProducts: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      if (action.payload.length > 0) {
        state.viewProducts = state.products.filter(
          (product) =>
            product.name.toLowerCase().includes(state.search.toLowerCase()) ||
            product.brand.toLowerCase().includes(state.search.toLowerCase()) ||
            product.type.toLowerCase().includes(state.search.toLowerCase()) ||
            product.description.toLowerCase().includes(state.search.toLowerCase()) ||
            String(product.price).includes(state.search) ||
            String(product.stock).includes(state.search)
        );
      } else {
        state.viewProducts = state.products;
      }
    },
    setFormProducts: (state, action: PayloadAction<FieldValues>) => {
      state.formProducts = [...state.formProducts, action.payload];
    },
  },
});

export const { setSearch, setFormProducts } = productsSlice.actions;

export default productsSlice.reducer;
