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
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { getStores, Store } from "./ProductViewModel";

const ProductDetailScreen = ({ navigation }: any) => {
  const [stores, setStores] = useState<Store[]>([]);
  const [searchText, setSearchText] = useState("Butter");

  useEffect(() => {
    getStores().then(setStores);
  }, []);

  const renderStoreItem = ({ item }: { item: Store }) => (
    <View style={styles.storeCard}>
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
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header with Search (mimicking Image 3 where it has a search bar "Butter" at top) */}
      {/* Actually Image 3 has "Product listing" presumably at very top, then Logo, then Search Bar, THEN "ALL STORES".
           Wait, looking at Image 3 provided in context... 
           Image 3 has:
           Logo (FROOKOON)
           Search Bar: (<) Butter (x)
           "ALL STORES" Heading
           List of Stores (Shyam, Pawar, Kamal...)
           
           I will implement this exact layout.
       */}
      <View style={styles.content}>
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
            editable={false} // Image 3 seems to show a static state or result of search
          />
          <TouchableOpacity>
            <Icon name="close" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>ALL STORES</Text>

        <FlatList
          data={stores}
          keyExtractor={(i) => i.id}
          renderItem={renderStoreItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" }, // Image 3 background looks white
  content: { flex: 1, padding: 16 },

  logoContainer: { alignItems: "flex-start", marginBottom: 16 },
  logoCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E0D8C0",
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
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    padding: 0,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "900", // "ALL STORES" is very bold
    color: "#000",
    marginBottom: 16,
    textTransform: "uppercase"
  },

  // Store Item Styles
  storeCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#fff",
  },
  storeImage: {
    width: 70,
    height: 70,
    backgroundColor: "#eee",
    //      borderRadius: 4, 
    marginRight: 12,
    resizeMode: 'contain'
  },
  storeInfo: { flex: 1 },
  storeName: { fontSize: 16, fontWeight: "bold", color: "#000", marginBottom: 4 },
  storeDetailsRow: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  storeDetailsText: { fontSize: 14, color: "#333" },
  deliveryRow: { flexDirection: "row", alignItems: "center" },
  deliveryText: { fontSize: 13, color: "#333" },

  listContent: { paddingBottom: 20 },
});
