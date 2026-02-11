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
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { getStores, getProducts, Store, Product } from "./ProductViewModel";

const ProductListScreen = ({ navigation }: any) => {
  const [searchText, setSearchText] = useState("Butter"); // Default to Image 1 state
  const [stores, setStores] = useState<Store[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  // For demo purposes, we'll toggle between showing products and stores
  // based on the search text to satisfy "match design of image 1 and 2"
  const isStoreSearch = searchText === "Shyam Grocery";

  useEffect(() => {
    getStores().then(setStores);
    getProducts().then(setProducts);
  }, []);

  const renderProductItem = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );

  const renderStoreItem = ({ item }: { item: Store }) => (
    <TouchableOpacity
      style={styles.storeCard}
      onPress={() => navigation.navigate("ProductDetail", { store: item })}
    >
      <Image source={{ uri: item.image }} style={styles.storeImage} />
      <View style={styles.storeInfo}>
        <Text style={styles.storeName}>{item.name}</Text>
        <View style={styles.storeDetailsRow}>
          <Icon name="time-outline" size={14} color="#333" />
          <Text style={styles.storeDetailsText}> {item.time}</Text>
          <Text style={styles.storeDetailsText}>  {item.distance}</Text>
        </View>
        <View style={styles.deliveryRow}>
          <Icon name="car-outline" size={14} color="#333" />
          <Text style={styles.deliveryText}> Free Delivery</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f4f4" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Product listing</Text>
      </View>

      {/* Main Content Card - approximating the white card look effectively */}
      <View style={styles.contentCard}>
        {/* Logo Placeholder */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>FROOKOON</Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search"
          />
          <TouchableOpacity onPress={() => setSearchText("")}>
            <Icon name="close" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* List */}
        <FlatList
          data={isStoreSearch ? stores : products}
          keyExtractor={(item) => item.id}
          renderItem={isStoreSearch ? renderStoreItem : (renderProductItem as any)} // Cast to any for simplified typing in this mixed list
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F4F4" },
  header: { padding: 16 },
  headerTitle: { fontSize: 18, color: "#888" }, // "Product listing" grey text
  contentCard: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  logoContainer: { alignItems: "flex-start", marginBottom: 16 },
  logoCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E0D8C0", // Beige gold-ish placeholder
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: { fontSize: 8, fontWeight: "bold" },

  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    padding: 0,
  },

  // Product Item Styles (Image 1)
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#eee", // Or just use elevation/shadow if preferred, but image shows outlines mostly on text inputs/store cards?
    // actually image 1 shows product cards with border?? 
    // Image 1 shows products with an image box (border) and text next to it.
    // Let's refine:
  },
  productImage: {
    width: 80,
    height: 60,
    borderWidth: 1,
    borderColor: "#000", // Image 1 has black border around product images
    borderRadius: 10,
    resizeMode: 'contain',
    marginRight: 16,
    backgroundColor: "#fff"
  },
  productName: { fontSize: 16, color: "#000" },

  // Store Item Styles (Image 2)
  storeCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#000", // Image 2 shows black border around store card
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#fff",
  },
  storeImage: {
    width: 70,
    height: 70,
    backgroundColor: "#eee",
    //      borderRadius: 4, 
    marginRight: 12,
    resizeMode: 'cover'
  },
  storeInfo: { flex: 1 },
  storeName: { fontSize: 16, fontWeight: "bold", color: "#000", marginBottom: 4 },
  storeDetailsRow: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  storeDetailsText: { fontSize: 14, color: "#333" },
  deliveryRow: { flexDirection: "row", alignItems: "center" },
  deliveryText: { fontSize: 13, color: "#333" },

  listContent: { paddingBottom: 20 },
});
