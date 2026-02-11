// src/screens/product/ProductDetailScreen.tsx

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { getProducts, Product } from "./ProductViewModel";

const ProductDetailScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.row}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F4F4F4" },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  image: { width: 70, height: 70, borderRadius: 12, marginRight: 14 },
  name: { fontSize: 16 },
});
