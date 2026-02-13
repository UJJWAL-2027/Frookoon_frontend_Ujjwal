import { useState, useMemo } from "react";

export interface Product {
  id: string;
  name: string;
  image: string;
}

export interface Store {
  id: string;
  name: string;
  image: string;
  time: string;
  distance: string;
  delivery: string;
}

export const products: Product[] = [
  { id: "1", name: "Amul Butter", image: "https://via.placeholder.com/80" },
  { id: "2", name: "Sweat cream salted butter", image: "https://via.placeholder.com/80" },
  { id: "3", name: "Swift unsalted Butter", image: "https://via.placeholder.com/80" },
  { id: "4", name: "Organic Valley Salted Butter", image: "https://via.placeholder.com/80" },
];

export const stores: Store[] = [
  {
    id: "1",
    name: "Shyam Grocery",
    image: "https://via.placeholder.com/80",
    time: "30-35 Min",
    distance: "1.1 Km",
    delivery: "Free Delivery",
  },
  {
    id: "2",
    name: "Pawar’s Grocery",
    image: "https://via.placeholder.com/80",
    time: "30-35 Min",
    distance: "1.1 Km",
    delivery: "Free Delivery",
  },
  {
    id: "3",
    name: "Kamal Grocery",
    image: "https://via.placeholder.com/80",
    time: "30-35 Min",
    distance: "1.1 Km",
    delivery: "Free Delivery",
  },
  {
    id: "4",
    name: "Kamal Grocery",
    image: "https://via.placeholder.com/80",
    time: "30-35 Min",
    distance: "1.1 Km",
    delivery: "Free Delivery",
  },
];

export const useProductViewModel = () => {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredProducts = useMemo(() => {
    if (!searchText) return [];
    return products.filter((p) =>
      p.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  const filteredStores = useMemo(() => {
    if (!searchText) return [];
    return stores.filter((s) =>
      s.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  const isSearchingProducts = filteredProducts.length > 0 && filteredStores.length === 0;
  const isSearchingStores = filteredStores.length > 0;
  const showAllStores = !searchText && (isFocused || searchText === "");

  return {
    searchText,
    setSearchText,
    setIsFocused,
    filteredProducts,
    filteredStores,
    isSearchingProducts,
    isSearchingStores,
    showAllStores,
    products,
    stores,
  };
};
