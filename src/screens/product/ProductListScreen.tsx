// src/screens/product/ProductListScreen.tsx

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { getStores, Store } from "./ProductViewModel";

const ProductListScreen = ({ navigation }: any) => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    getStores().then(setStores);
  }, []);

  const renderItem = ({ item }: { item: Store }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetail", { store: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.time}   {item.distance}</Text>
        <Text>Free Delivery</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ALL STORES</Text>

      <FlatList
        data={stores}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F4F4F4" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  card: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 14,
    backgroundColor: "#fff",
    marginBottom: 12,
    elevation: 2,
  },
  image: { width: 60, height: 60, borderRadius: 10, marginRight: 12 },
  name: { fontWeight: "bold", fontSize: 16 },
});
