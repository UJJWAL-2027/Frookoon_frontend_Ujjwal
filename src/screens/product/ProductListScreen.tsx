// src/screens/product/ProductListScreen.tsx

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  StatusBar,
  ScrollView // Added
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { getStores, getProducts, Store, Product } from "./ProductViewModel";

const ProductListScreen = ({ navigation, route }: any) => {
  const { initialQuery } = route.params || {};
  const [searchText, setSearchText] = useState(initialQuery || "Butter");
  const [stores, setStores] = useState<Store[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  // For demo purposes, we'll toggle between showing products and stores
  // based on the search text to satisfy "match design of image 1 and 2"
  const isStoreSearch = searchText.toLowerCase() === "shyam grocery";

  useEffect(() => {
    getStores().then(setStores);
    getProducts().then(setProducts);
  }, []);

  // Product Item Styles (Image 1)
  const renderProductItem = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );

  // Store Item Styles (Image 2)
  const renderStoreItem = ({ item }: { item: Store }) => (
    <TouchableOpacity
      style={styles.storeCard}
      onPress={() => navigation.navigate("ProductDetail", { store: item })}
    >
      <Image source={{ uri: item.image }} style={styles.storeImage} />
      <View style={styles.storeInfo}>
        <Text style={styles.storeName}>{item.name}</Text>
        <View style={styles.storeDetailsRow}>
          <Icon name="time-outline" size={16} color="#000" />
          <Text style={styles.storeDetailsText}> {item.time}</Text>
          <Text style={styles.storeDetailsText}>  {item.distance}</Text>
        </View>
        <View style={styles.deliveryRow}>
          <Icon name="bus-outline" size={16} color="#000" />
          <Text style={styles.deliveryText}> Free Delivery</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Title */}
        <Text style={styles.headerTitle}>Product listing</Text>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>FROOKOON</Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={28} color="#000" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search"
            placeholderTextColor="#000"
          />
          <TouchableOpacity onPress={() => setSearchText("")}>
            <Icon name="close" size={22} color="#000" fontWeight="bold" />
          </TouchableOpacity>
        </View>

        {/* List */}
        <View style={styles.listContainer}>
          {isStoreSearch ? (
            stores.map(item => <View key={item.id}>{renderStoreItem({ item })}</View>)
          ) : (
            products.map(item => <View key={item.id}>{renderProductItem({ item })}</View>)
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" }, // White background as per image
  scrollContent: { padding: 20 },

  headerTitle: {
    fontSize: 18,
    color: "#ccc",
    marginBottom: 20,
    fontWeight: '500'
  },

  logoContainer: { alignItems: "flex-start", marginBottom: 20 },
  logoCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E0D8C0",
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: { fontSize: 10, fontWeight: "bold" },

  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 30, // Pill shape
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 30,
    height: 50
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    fontWeight: "500"
  },

  listContainer: {
    gap: 15
  },

  // Product Item Styles
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  productImageContainer: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    padding: 5,
    marginRight: 20
  },
  productImage: {
    width: 80,
    height: 50,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 16,
    color: "#000",
    fontWeight: "400",
    flex: 1,
    flexWrap: 'wrap'
  },

  // Store Item Styles
  storeCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    padding: 12,
    backgroundColor: "#fff",
  },
  storeImage: {
    width: 65,
    height: 75,
    marginRight: 15,
    resizeMode: "contain" // Changed to contain to show full package
  },
  storeInfo: { flex: 1 },
  storeName: { fontSize: 16, fontWeight: "bold", color: "#000", marginBottom: 5 },
  storeDetailsRow: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  storeDetailsText: { fontSize: 14, color: "#000", fontWeight: "400", marginLeft: 5 },
  deliveryRow: { flexDirection: "row", alignItems: "center" },
  deliveryText: { fontSize: 14, color: "#000", fontWeight: "400", marginLeft: 8 },
});
