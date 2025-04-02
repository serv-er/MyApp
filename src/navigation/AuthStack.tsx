import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Importing all screens

 import StoreLoginScreen from "../screens/StoreLoginScreen";
 
import StoreRegistrationStep1 from "../screens/StoreRegistrationStep1";
import FirstScreen from "../screens/FirstScreen";
import RoleSelectionScreen from "../screens/RoleSelectionScreen"
import StoreScreen from "../screens/StoreScreen";
import SellerDashboard from "../screens/SellerDashboard";
 import StoreGuideScreen from "../screens/StoreGuideSreen";
import CustomerScreen from "../screens/CustomerScreen";
import DeliveryScreen from "../screens/DeliveryScreen";



// Define types for navigation
export type AuthStackParamList = {
    First: undefined;
    RoleSelection: undefined;
     Store: undefined;
    StoreGuide: undefined;
    Customer: undefined;
    Delivery: undefined;
   StoreLogin: undefined;
  StoreRegisterStep1:undefined;
  SellerDashboard:undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
   
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
        <Stack.Screen name="Store" component={StoreScreen} />
        <Stack.Screen name="Customer" component={CustomerScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} /> 

        <Stack.Screen name="StoreGuide" component={StoreGuideScreen} />

        <Stack.Screen name="StoreLogin" component={StoreLoginScreen} />
        <Stack.Screen name="SellerDashboard" component={SellerDashboard} />
        <Stack.Screen name="StoreRegisterStep1" component={StoreRegistrationStep1} />

      </Stack.Navigator>

  );
}
