import api from "@/utils/axios";
import { IProduct, IFetchLimitAndSkip } from "@/types/products";
import ProductDisplayBubble from "@/app/components/product/ProductDisplayBubble";

export default async function CategoryName({
  params,
}: {
  params: { categoryName: string };
}) {
  const res = await api<IFetchLimitAndSkip>(
    "https://dummyjson.com/products/category/" + params.categoryName,
  );
  const response = res.data;

  return (
    <section className="space-y-2 px-44">
      <h3 className="text-xl font-bold">
        {params.categoryName.charAt(0).toUpperCase() +
          params.categoryName.slice(1)}
      </h3>
      <div className="grid grid-rows-9 grid-cols-4 gap-4">
        {response != undefined &&
          response.products.map((product: IProduct) => (
            <ProductDisplayBubble product={product} key={product.id} />
          ))}
      </div>
    </section>
  );
}
