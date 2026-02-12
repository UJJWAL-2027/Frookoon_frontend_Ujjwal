// src/screens/product/ProductDetailScreen.tsx

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { getStores, Store } from "./ProductViewModel";

const ProductDetailScreen = ({ navigation }: any) => {
  const [stores, setStores] = useState<Store[]>([]);
  const [searchText, setSearchText] = useState("Butter");

  useEffect(() => {
    getStores().then(setStores);
  }, []);

  // Store Item Styles (Same as ProductListScreen to match consistency)
  const renderStoreItem = ({ item }: { item: Store }) => (
    <TouchableOpacity style={styles.storeCard}>
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

      <ScrollView contentContainerStyle={styles.content}>
        {/* Header Title (Ghost) */}
        <Text style={styles.headerTitle}>Product listing</Text>

        {/* Logo Placeholder */}
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
            editable={false}
            placeholderTextColor="#000"
          />
          <TouchableOpacity>
            <Icon name="close" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>ALL STORES</Text>

        <View style={styles.listContainer}>
          {stores.map(item => (
            <View key={item.id} style={{ marginBottom: 15 }}>
              {renderStoreItem({ item })}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 20 },

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
    borderRadius: 30,
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

  sectionTitle: {
    fontSize: 24,
    fontWeight: "900", // "ALL STORES" is very bold
    color: "#000",
    marginBottom: 20,
    textTransform: "uppercase"
  },

  listContainer: {
    gap: 15
  },

  // Store Item Styles
  storeCard: {
    flexDirection: "row",
    alignItems: "center",
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
    resizeMode: 'contain'
  },
  storeInfo: { flex: 1 },
  storeName: { fontSize: 16, fontWeight: "bold", color: "#000", marginBottom: 5 },
  storeDetailsRow: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  storeDetailsText: { fontSize: 14, color: "#000", fontWeight: "400", marginLeft: 5 },
  deliveryRow: { flexDirection: "row", alignItems: "center" },
  deliveryText: { fontSize: 14, color: "#000", fontWeight: "400", marginLeft: 8 },
});
