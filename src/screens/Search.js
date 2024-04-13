import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
    // You can perform search operations based on the searchQuery state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your search query"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
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
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default Search;
