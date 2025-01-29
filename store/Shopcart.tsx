import { IProduct } from "@/types/products";
import { create } from "zustand";

interface ShopcartStore {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
  removeProduct: (id: number) => void;
}

export const useShopcartStore = create<ShopcartStore>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
}));
