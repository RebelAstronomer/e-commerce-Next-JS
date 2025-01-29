"use client";

import Image from "next/image";
import { PlusIcon, MinusIcon } from "lucide-react";
import { useState } from "react";
import { IProduct } from "@/types/products";
import { useShopcartStore } from "@/store/Shopcart";

interface ItemCardProps {
  product: IProduct;
  quantity: number;
}

const IMAGE_SIZE = 80;
const MAX_NUMBER_LENGTH = 2;

export default function ItemCard({ product, quantity }: ItemCardProps) {
  const [num, setNum] = useState(quantity);
  const [finalPrice, setFinalPrice] = useState(product.price);

  const { removeProduct } = useShopcartStore();

  const handleQuantitiesChances = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value.slice(0, MAX_NUMBER_LENGTH)));
    updateFinalPrice();
  };

  const handleQuantitiesChancesBtn = (value: number) => {
    setNum(value);
  };

  const updateFinalPrice = () => {
    setFinalPrice(product.price * num);
  };

  return (
    <div className="border rounded-md p-4">
      <div className="flex flex-row gap-2 items-center">
        <Image
          src={product.images[0]}
          alt={product.title + " image"}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <div className="flex flex-col">
          <p className="font-bold text-lg text-ellipsis overflow-hidden">
            {product.title}
          </p>
          <p
            className="text-error text-sm link link-hover"
            onClick={() => removeProduct(product.id)}
          >
            Remover
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-row items-center border rounded-lg px-1 py-2 gap-3 max-w-[50%] justify-center">
          <MinusIcon
            className="size-5 btn btn-circle btn-sm"
            onClick={() => num > 1 && handleQuantitiesChancesBtn(num - 1)}
          />
          <input
            className="bg-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-none outline-none w-full text-center rounded-md input input-sm text-lg"
            type="number"
            value={num}
            onChange={handleQuantitiesChances}
          />
          <PlusIcon
            className="size-5 btn btn-circle btn-sm"
            onClick={() => num < 99 && handleQuantitiesChancesBtn(num + 1)}
          />
        </div>
        <p className="text-lg font-semibold">R$ {finalPrice}</p>
      </div>
    </div>
  );
}
