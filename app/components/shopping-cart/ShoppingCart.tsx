import { useShopcartStore } from "@/store/Shopcart";
import ItemCard from "./ItemCard";
import Link from "next/link";

export default function ShoppingCart() {
  const { products } = useShopcartStore();
  return (
    <section className="absolute bg-neutral-content h-screen w-80 right-0 top-20 z-40 px-4 py-2 pb-28">
      <h4 className="text-lg font-bold">Carrinho</h4>
      <div className="w-full h-full bg-neutral-100 rounded-lg flex items-center flex-col">
        <div className={`${products.length > 0 && "overflow-y-scroll"}`}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="p-2 flex-1">
                <ItemCard
                  product={product}
                  quantity={
                    products.map((item) => item.id === product.id).length
                  }
                />
              </div>
            ))
          ) : (
            <p>Carrinho vazio</p>
          )}
        </div>
        {products.length > 0 && (
          <div className="p-4 border-t-2 border-t-white w-full flex justify-center">
            <button className="btn btn-primary">
              <Link href={"/payment/checking"}>Finalizar compra</Link>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
