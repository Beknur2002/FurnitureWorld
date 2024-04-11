import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useAtom } from "jotai";
import * as SecureStore from "expo-secure-store";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainNavigator = () => {
  const isSigned = false;
  return (
    <NavigationContainer>
      {isSigned ? (
        <Tab.Navigator>
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
