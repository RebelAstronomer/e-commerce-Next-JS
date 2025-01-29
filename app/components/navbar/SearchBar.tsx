"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div
      className={
        "relative flex items-center gap-2 border rounded-lg border-white"
      }
    >
      <button className="ml-2">
        <Search />
      </button>
      <input
        className="input rounded-l-none"
        type="text"
        placeholder="Buscar..."
        onFocus={() => setSearching(true)}
        onBlur={() => setSearching(false)}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      {searching && (
        <section className="absolute flex flex-col gap-2 rounded-md bg-neutral-content h-72 w-80 top-16 z-40 px-4 py-2">
          <div className="text-neutral-400">{`"` + search + `"`}</div>
          <div className="bg-neutral-100 px-2 h-full rounded-md">Produtos</div>
        </section>
      )}
    </div>
  );
}
