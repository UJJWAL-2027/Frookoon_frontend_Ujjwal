// src/screens/product/ProductViewModel.ts

export interface Store {
  id: string;
  name: string;
  image: string;
  time: string;
  distance: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
}

export const getStores = async (): Promise<Store[]> => {
  // mock API response
  return [
    {
      id: "1",
      name: "Shyam Grocery",
      image: "https://via.placeholder.com/80",
      time: "30-35 Min",
      distance: "1.1 Km",
    },
    {
      id: "2",
      name: "Pawar’s Grocery",
      image: "https://via.placeholder.com/80",
      time: "30-35 Min",
      distance: "1.1 Km",
    },
    {
      id: "3",
      name: "Kamal Grocery",
      image: "https://via.placeholder.com/80",
      time: "30-35 Min",
      distance: "1.1 Km",
    },
  ];
};

export const getProducts = async (): Promise<Product[]> => {
  return [
    { id: "1", name: "Amul Butter", image: "https://via.placeholder.com/80" },
    { id: "2", name: "Sweat cream salted butter", image: "https://via.placeholder.com/80" },
    { id: "3", name: "Swift unsalted Butter", image: "https://via.placeholder.com/80" },
    { id: "4", name: "Organic Valley Salted Butter", image: "https://via.placeholder.com/80" },
  ];
};
