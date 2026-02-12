import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import OTPScreen from "../screens/OTPScreen";
import LocationScreen from "../screens/LocationScreen";
import BottomTabs from "./BottomTabs";

import ProductListScreen from "../screens/product/ProductListScreen";
import ProductDetailScreen from "../screens/product/ProductDetailScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";

/**
 * Stack Param Types (VERY IMPORTANT for TS projects)
 */
export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  OTP: undefined;
  Location: undefined;
  Home: undefined;
  ProductList: undefined;
  ProductDetail: undefined;
  CreateAccount: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      {/* Auth Flow */}
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />

      {/* Main App */}
      <Stack.Screen name="Home" component={BottomTabs} />

      {/* Product Module (YOUR TASK) */}
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
