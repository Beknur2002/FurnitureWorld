import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

const ListItem = ({ name, link }) => {
  const handlePress = async () => {
    let result = await WebBrowser.openBrowserAsync(link);
    console.log(result);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.link}>{link}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default ListItem;
