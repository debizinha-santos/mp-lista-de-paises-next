"use client";// This is a client component in Next.js

import { useState } from "react";
import type { Country } from "@/app/page";


type SearchComponentProps = {
  onResults: (results: Country[]) => void;
  onClear: () => void;
};

export default function SearchComponent({ onResults, onClear }: SearchComponentProps) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const results = await res.json();
      onResults(results);
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar país..."
        className="flex-1 p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={loading}
      >
        Buscar
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-gray-300 rounded"
        onClick={() => {
          setQuery("");
          onClear();
        }}
        disabled={loading}
      >
        Limpar
      </button>
    </form>
  );
}