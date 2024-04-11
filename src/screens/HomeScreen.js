import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListItem from "./ListItem";

const data = [
  {
    id: "1",
    name: "Item 1",
    link: "https://ar.elarbis.com/cosmorelax/2000983190277.html",
  },
  {
    id: "2",
    name: "Item 2",
    link: "https://ar.elarbis.com/cosmorelax/2000983190277.html",
  },
  {
    id: "3",
    name: "Item 3",
    link: "https://ar.elarbis.com/cosmorelax/2000983190277.html",
  },
  // Add more items as needed
];
const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem name={item.name} link={item.link} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
