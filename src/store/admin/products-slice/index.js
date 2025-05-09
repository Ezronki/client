import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get the API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"; // Fallback for local development

const initialState = {
  isLoading: false,
  productList: [],
  error: null, // For capturing errors
};

// Add a new product
export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (formData, { rejectWithValue }) => {
    try {
      const result = await axios.post(
        `${API_URL}/api/admin/products/add`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return result?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add product");
    }
  }
);

// Fetch all products
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get(`${API_URL}/api/admin/products/get`);
      return result?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch products");
    }
  }
);

// Edit a product
export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const result = await axios.put(
        `${API_URL}/api/admin/products/edit/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return result?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to edit product");
    }
  }
);

export const getSubcategories = createAsyncThunk(
  "products/getSubcategories",
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/admin/subcategories/${categoryId}`
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch subcategories");
    }
  }
);

// Delete a product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.delete(
        `${API_URL}/api/admin/products/delete/${id}`
      );
      return result?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete product");
    }
  }
);

const AdminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all products
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Add new product
      .addCase(addNewProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList.push(action.payload.data);
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Edit product
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedProduct = action.payload.data;
        const index = state.productList.findIndex(
          (product) => product.id === updatedProduct.id
        );
        if (index !== -1) {
          state.productList[index] = updatedProduct;
        }
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete product
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        const deletedProductId = action.meta.arg;
        state.productList = state.productList.filter(
          (product) => product.id !== deletedProductId
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default AdminProductsSlice.reducer;
