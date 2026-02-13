import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Product } from "./ProductViewModel";

const ProductDetailScreen = ({ route, navigation }: any) => {
  const { product } = route.params as { product: Product };

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.centerContent}>
          <Text>Product not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Product Details</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.productPrice}>$4.99</Text>
          <Text style={styles.description}>
            Experience the rich, creamy taste of fresh butter. Perfect for cooking, baking, or spreading on your favorite bread.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    // Soft Shadow
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 15,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  productImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "#F4F4F4",
  },
  addToCartButton: {
    backgroundColor: "#1A1A1A",
    borderRadius: 14,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductDetailScreen;
