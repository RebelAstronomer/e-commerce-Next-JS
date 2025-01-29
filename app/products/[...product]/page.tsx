"use client";

// TODO: Fix the context error

import { IProduct } from "@/types/products";
import api from "@/utils/axios";
import { useParams } from "next/navigation";
import Link from "next/link";
import { uppercaseFristLetter } from "@/utils";
import Carousel from "@/app/components/carousel/Carousel";
import Rating from "@/app/components/Rating";
import ReviewSection from "@/app/components/product/ReviewSection";
import { useShopcartStore } from "@/store/Shopcart";

export default async function ProductPage() {
  const { addProduct } = useShopcartStore();
  const param = useParams();
  const res = await api<IProduct>(
    "https://dummyjson.com/products/" + param.product[1],
  );
  const response = res.data;

  const handlePurchiseProduct = () => {
    addProduct(response);
  };

  return (
    <section className="px-44">
      {response && (
        <div className="space-y-4">
          <div>
            <Link
              className="underline"
              href={"/categories/" + response.category}
            >
              {uppercaseFristLetter(response.category)}
            </Link>{" "}
            {">"} {response.title}
          </div>
          <div className="flex flex-row justify-start gap-4">
            <Carousel images={response.images} />
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <h2 className="font-bold text-2xl">{response.title}</h2>
                <div className="flex flex-row gap-4">
                  <Rating rating={response.rating} />
                  <div className="flex gap-4">
                    {response.tags.map((tag) => (
                      <Link
                        href={"/categories/" + tag}
                        key={tag}
                        className="btn btn-sm btn-primary"
                      >
                        {uppercaseFristLetter(tag)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-xl">Sobre o produto</h4>
                <div className="max-w-[50%]">{response.description}</div>
              </div>
              <div>
                <p>Marca: {response.brand}</p>
                <p>Garantia: {response.warrantyInformation}</p>
                {response.stock > 0
                  ? "Estoque disponível"
                  : "Estoque não disponível"}
              </div>
              <div className="flex flex-row max-w-[44%] bg-neutral-100 rounded-lg p-4 gap-4">
                <div className="flex flex-col">
                  <p className="text-3xl">R$ {response.price}</p>
                  <p className="text-primary text-lg">
                    {response.discountPercentage}% de desconto
                  </p>
                </div>
                <p className="text-lg">{response.shippingInformation}</p>
              </div>
              <div className="flex flex-col gap-2 max-w-[44%]">
                <button
                  onClick={handlePurchiseProduct}
                  className="btn btn-primary"
                >
                  Comprar agora
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="overflow-x-auto">
              <h4 className="font-bold text-xl">Dimensões</h4>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Largura</th>
                    <td>{response.dimensions.width}cm</td>
                  </tr>
                  <tr>
                    <th>Altura</th>
                    <td>{response.dimensions.height}cm</td>
                  </tr>
                  <tr>
                    <th>Profundidade</th>
                    <td>{response.dimensions.depth}cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <ReviewSection reviews={response.reviews} />
        </div>
      )}
    </section>
  );
}
