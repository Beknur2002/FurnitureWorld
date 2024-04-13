import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useAtom } from "jotai";
import * as SecureStore from "expo-secure-store";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeNew from "../screens/Home";
import Search from "../screens/Search";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import Product from "../screens/Product";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RootStackScreens = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeTabs" component={HomeTabs} />
    <Stack.Screen name="Product" component={Product} />
  </Stack.Navigator>
);

const MainNavigator = () => {
  const isSigned = false;
  return (
    <NavigationContainer>
      {isSigned ? (
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
      ) : (
        <RootStackScreens />
      )}
    </NavigationContainer>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ focused, color }) => {
          return <TabIcon name={route.name} focused={focused} color={color} />;
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#C7C6CC",
      })}
    >
      <Tab.Screen name="Home" component={HomeNew} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainNavigator;

const TabIcon = ({ name, focused, color }) => {
  const iconName = getIconName(name, focused);
  return <Ionicons name={iconName} size={22} color={color} />;
};

const getIconName = (name, focused) => {
  switch (name) {
    case "Home":
      return focused ? "home" : "home-outline";
    case "Search":
      return focused ? "search" : "search-outline";
    case "Favorites":
      return focused ? "heart" : "heart-outline";
    case "Profile":
      return focused ? "person-circle" : "person-circle-outline";
    default:
      return "help-sharp";
  }
};

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    position: "absolute",
  },
});
