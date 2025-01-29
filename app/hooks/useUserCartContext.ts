import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";

export function useCartContext() {
  const cart = useContext(CartContext);

  if (cart === undefined) {
    throw new Error("useCartContext must be used with UserCartContext");
  }

  return cart;
}
