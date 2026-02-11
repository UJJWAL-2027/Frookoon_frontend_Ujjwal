import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function ProductDetailScreen() {
  const route: any = useRoute();
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>₹ {product.price}</Text>

      <Text style={styles.desc}>
        Premium dairy product crafted for freshness and quality.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 260,
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 16,
  },
  price: {
    fontSize: 22,
    fontWeight: "700",
    marginVertical: 10,
  },
  desc: {
    color: "#666",
    lineHeight: 22,
  },
});
