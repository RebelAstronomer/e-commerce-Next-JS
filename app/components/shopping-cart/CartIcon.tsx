"use client";

import { ShoppingBasket } from "lucide-react";
import { useShopcartStore } from "@/store/Shopcart";

interface CartIconProps {
  setShowCart: (value: boolean) => void;
}

export default function CartIcon({ setShowCart }: CartIconProps) {
  const { products } = useShopcartStore();
  return (
    <div className="indicator relative">
      {products.length > 0 && (
        <span className="indicator-item badge badge-primary">
          {products.length <= 0 ? "" : products.length}
        </span>
      )}
      <button
        className="btn-ghost rounded-full p-2"
        onClick={() => setShowCart((prev) => !prev)}
      >
        <ShoppingBasket className="scale-125 -z-10" />
      </button>
    </div>
  );
}
