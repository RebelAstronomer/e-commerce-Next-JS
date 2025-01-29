import { uppercaseFristLetter } from "@/utils";
import api from "@/utils/axios";
import Link from "next/link";

export default async function CategoryPage() {
  const res = await api<string[]>(
    "https://dummyjson.com/products/category-list",
  );
  const response = res.data;

  return (
    <section className="flex flex-col gap-4">
      {response != undefined &&
        response.map((category) => (
          <Link href={"/categories/" + category} key={category}>
            {uppercaseFristLetter(category)}
          </Link>
        ))}
    </section>
  );
}
