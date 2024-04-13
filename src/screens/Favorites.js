import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <View style={styles.favoriteItem}>
        <Text style={styles.favoriteText}>Favorite Item 1</Text>
      </View>
      <View style={styles.favoriteItem}>
        <Text style={styles.favoriteText}>Favorite Item 2</Text>
      </View>
      {/* Add more favorite items here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  favoriteItem: {
    backgroundColor: "#e3e3e3",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  favoriteText: {
    fontSize: 16,
  },
});

export default Favorites;
