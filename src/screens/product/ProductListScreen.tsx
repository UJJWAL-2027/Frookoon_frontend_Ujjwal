import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useProductViewModel, Product, Store } from "./ProductViewModel";

const ProductListScreen = ({ navigation }: any) => {
  const {
    searchText,
    setSearchText,
    setIsFocused,
    filteredProducts,
    filteredStores,
    isSearchingProducts,
    isSearchingStores,
    showAllStores,
    stores,
  } = useProductViewModel();

  const renderProductItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productRow}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <View style={styles.productImageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>
      <Text style={styles.productName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderStoreItem = ({ item }: { item: Store }) => (
    <View style={styles.storeCard}>
      <Image source={{ uri: item.image }} style={styles.storeImage} />
      <View style={styles.storeInfo}>
        <Text style={styles.storeName}>{item.name}</Text>
        <View style={styles.storeDetailsRow}>
          <View style={styles.iconTextRow}>
            <Feather name="clock" size={14} color="#666" />
            <Text style={styles.storeDetailText}>{item.time}</Text>
          </View>
          <Text style={styles.distanceText}>{item.distance}</Text>
        </View>
        <View style={styles.deliveryRow}>
          <FontAwesome5 name="truck" size={12} color="#666" />
          <Text style={styles.deliveryText}>{item.delivery}</Text>
        </View>
      </View>
    </View>
  );

  const getListContent = () => {
    if (isSearchingProducts) {
      return (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={renderProductItem}
          contentContainerStyle={styles.listContent}
        />
      );
    }

    if (isSearchingStores) {
      return (
        <FlatList
          data={filteredStores}
          keyExtractor={(item) => item.id}
          renderItem={renderStoreItem}
          contentContainerStyle={styles.listContent}
        />
      );
    }

    if (showAllStores) {
      return (
        <View style={{ flex: 1 }}>
          <Text style={styles.sectionTitle}>ALL STORES</Text>
          <FlatList
            data={stores}
            keyExtractor={(item) => item.id}
            renderItem={renderStoreItem}
            contentContainerStyle={styles.listContent}
          />
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoText}>FROOKOON</Text>
            </View>
          </View>

          <View style={styles.searchBarContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>

            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              value={searchText}
              onChangeText={setSearchText}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />

            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => setSearchText("")}>
                <Ionicons name="close" size={20} color="#000" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.content}>
          {getListContent()}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#F4F4F4",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  logoCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E0D8C0",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "#000",
    height: 52,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  backButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#000",
    marginBottom: 15,
    marginTop: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  // Product Row Styles (Image 1)
  productRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  productImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    flex: 1,
  },
  // Store Card Styles (Image 2)
  storeCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: "#CCC",
    padding: 12,
    marginBottom: 15,
    // Soft Shadow
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  storeImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  storeInfo: {
    flex: 1,
    justifyContent: "center",
  },
  storeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  storeDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  iconTextRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  storeDetailText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  distanceText: {
    fontSize: 12,
    color: "#666",
  },
  deliveryRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  deliveryText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 6,
  },
});

export default ProductListScreen;
