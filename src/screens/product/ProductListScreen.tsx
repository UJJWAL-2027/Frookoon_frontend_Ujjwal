import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { getProducts } from "./ProductViewModel"; // ✅ USE VIEWMODEL

export default function ProductListScreen() {
  const navigation = useNavigation<any>();

  const [qty, setQty] = useState<any>({});
  const [products, setProducts] = useState<any[]>([]);

  // ✅ Load products from mock API
  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const increase = (id: string) => {
    setQty({ ...qty, [id]: (qty[id] || 0) + 1 });
  };

  const decrease = (id: string) => {
    const value = (qty[id] || 0) - 1;
    if (value <= 0) {
      const copy = { ...qty };
      delete copy[id];
      setQty(copy);
    } else {
      setQty({ ...qty, [id]: value });
    }
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("ProductDetail", { product: item })
      }
    >
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.weight}>500 g</Text>
        <Text style={styles.price}>₹ 55</Text>
      </View>

      {qty[item.id] ? (
        <View style={styles.stepper}>
          <TouchableOpacity onPress={() => decrease(item.id)}>
            <Text style={styles.stepTxt}>-</Text>
          </TouchableOpacity>
          <Text style={styles.stepTxt}>{qty[item.id]}</Text>
          <TouchableOpacity onPress={() => increase(item.id)}>
            <Text style={styles.stepTxt}>+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => increase(item.id)}
        >
          <Text style={styles.addText}>ADD</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Store Header */}
      <View style={styles.header}>
        <Text style={styles.store}>Vishal Mart</Text>
        <Icon name="location-outline" size={20} />
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <Icon name="search-outline" size={18} color="#888" />
        <TextInput
          placeholder="Search for products"
          style={styles.input}
        />
      </View>

      <FlatList
        data={products} // ✅ USING API DATA
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  store: {
    fontSize: 24,
    fontWeight: "700",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingHorizontal: 14,
    marginBottom: 18,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  weight: {
    color: "#777",
    marginVertical: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
  },
  addBtn: {
    backgroundColor: "#000",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  addText: {
    color: "#fff",
    fontWeight: "600",
  },
  stepper: {
    flexDirection: "row",
    backgroundColor: "#000",
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  stepTxt: {
    color: "#fff",
    fontSize: 18,
    marginHorizontal: 8,
  },
});
