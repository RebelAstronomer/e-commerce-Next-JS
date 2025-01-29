import { IProduct } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

interface ProductDisplayProps {
  product: IProduct;
}

export default function ProductDisplayBubble({ product }: ProductDisplayProps) {
  return (
    <div className="w-48 bg-neutral-100 rounded-md p-2">
      <Link href={"/products/" + [product.title, product.id].join("/")}>
        <Image
          src={product.thumbnail}
          alt={product.title + " image"}
          width={200}
          height={200}
        />
        <h4 className="font-semibold">{product.title}</h4>
        <div>
          <h5 className="text-lg font-bold">R$ {product.price}</h5>
          <p className="text-primary text-md font-semibold">
            {product.discountPercentage}% de desconto
          </p>
        </div>
      </Link>
    </div>
  );
}
