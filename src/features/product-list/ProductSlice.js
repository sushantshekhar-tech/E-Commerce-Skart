import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductsByFilters } from "./ProductAPI";

const initialState = {
  products: [],
  status: "idle",
  totalItems:0,
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response; // Assuming the response is an array of products
  }
);

export const fetchProductsByFiltersAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async ({filter,sort,Pagination}) => {
    const response = await fetchProductsByFilters(filter,sort,Pagination);
    return response; // Assuming the response is an array of products
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Your reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
        // state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      });
  },
});

export const { increment, decrement, incrementByAmount } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export const selecttotalItems = (state) => state.product.totalItems;

export default productSlice.reducer;
