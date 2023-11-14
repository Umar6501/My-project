"use client";
import { create } from "zustand";
import todoSlice from "./products/fetchProducts";

const useStore = create((set) => ({
  loading: false,
  error: "",
  ...todoSlice(set),
}));

export default useStore;
