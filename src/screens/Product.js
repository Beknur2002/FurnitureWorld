import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Navbar from "../components/Navbar";
import * as WebBrowser from "expo-web-browser";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

const item = {
  name: "Sebastian \nchairs",
  price: 349.99,
  image: require("../../assets/chair-transparent.png"),
  color: "#F7F7F7",
  isNew: true,
  isLiked: true,
  rating: 4,
  colors: ["#859E9D", "#225062", "#A8A7AD"],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

const Product = () => {
  const route = useRoute();
  const [activeColorIndex, setActiveColorIndex] = React.useState(0);

  const handlePress = async (link) => {
    // let result = await WebBrowser.openBrowserAsync(link);

    await Linking.openURL(link);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar title="Product" showBack={true} />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollInnerContainer}
      >
        <Image
          source={route.params.image}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.contentContainer}>
          <View style={styles.detailsRow}>
            <Text style={styles.productName}>{route.params.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </View>
          <View style={styles.ratingRow}>
            {Array.from({ length: item.rating }).map((_, index) => (
              <Ionicons
                name="star"
                size={20}
                color="black"
                style={styles.starIcon}
                key={index}
              />
            ))}
          </View>
          <View style={styles.colorsContainer}>
            <Text style={styles.colorTitle}>color</Text>
            <View style={styles.colorsRow}>
              {item.colors.map((color, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setActiveColorIndex(i)}
                  style={[
                    styles.colorContainer,
                    activeColorIndex === i && styles.activeColorContainer,
                  ]}
                >
                  <View style={[styles.colorDot, { backgroundColor: color }]} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress(route.params.link)}
          >
            <Text style={styles.buttonText}>Примерить к интерьеру </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../../assets/shopping-bag.png")}
              style={styles.shoppingBagIcon}
              resizeMode="contain"
            />
            <Text style={styles.buttonText}>Добавить в корзину</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    marginBottom: 10,
    width: "70%",
    height: "auto",
    aspectRatio: 2 / 3,
    alignSelf: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollInnerContainer: {
    paddingBottom: 30,
  },
  contentContainer: {
    paddingHorizontal: 25,
  },
  productName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  ratingRow: {
    marginTop: 5,
    marginBottom: 20,
    flexDirection: "row",
  },
  starIcon: {
    marginRight: 5,
  },
  colorTitle: {
    fontSize: 13,
    color: "black",
    fontWeight: "bold",
    marginBottom: 10,
  },
  colorsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  colorContainer: {
    marginRight: 12,
  },
  activeColorContainer: {
    padding: 3,
    backgroundColor: "white",
    borderRadius: 16,
    elevation: 2,
  },
  colorDot: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  description: {
    fontSize: 13,
    fontWeight: "500",
    marginVertical: 24,
    color: "#3F3F3F",
    lineHeight: 25,
  },
  buttonContainer: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  shoppingBagIcon: {
    width: 12,
    height: 17,
    tintColor: "white",
    marginRight: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
