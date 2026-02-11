// src/screens/product/ProductViewModel.ts

export interface Store {
  id: string;
  name: string;
  image: string;
  time: string;
  distance: string;
  freeDelivery: boolean;
}

export interface Product {
  id: string;
  name: string;
  image: string;
}

export const getStores = async (): Promise<Store[]> => {
  // mock API response matching Image 2 & 3
  return [
    {
      id: "1",
      name: "Shyam Grocery",
      image: "https://via.placeholder.com/80", // Replace with actual asset if available
      time: "30-35 Min",
      distance: "1.1 Km",
      freeDelivery: true,
    },
    {
      id: "2",
      name: "Pawar’s Grocery",
      image: "https://via.placeholder.com/80",
      time: "30-35 Min",
      distance: "1.1 Km",
      freeDelivery: true,
    },
    {
      id: "3",
      name: "Kamal Grocery",
      image: "https://via.placeholder.com/80",
      time: "30-35 Min",
      distance: "1.1 Km",
      freeDelivery: true,
    },
    {
      id: "4",
      name: "Kamal Grocery", // Duplicate for list length
      image: "https://via.placeholder.com/80",
      time: "30-35 Min",
      distance: "1.1 Km",
      freeDelivery: true,
    },
  ];
};

export const getProducts = async (): Promise<Product[]> => {
  // mock API response matching Image 1
  return [
    { id: "1", name: "Amul Butter", image: "https://via.placeholder.com/80" },
    { id: "2", name: "Sweat cream salted butter", image: "https://via.placeholder.com/80" },
    { id: "3", name: "Swift unsalted Butter", image: "https://via.placeholder.com/80" },
    { id: "4", name: "Organic Valley Salted Butter", image: "https://via.placeholder.com/80" },
  ];
};
