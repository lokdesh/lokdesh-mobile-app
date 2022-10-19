import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
const BottomNavBar = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const handleNavigation = (val) => {
    navigation.navigate(val);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, route.name === "Home" && styles.activebtn]}
        onPress={() => handleNavigation("Home")}
      >
        <Text
          style={[styles.navText, route.name === "Home" && styles.activetext]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, route.name === "GoLive" && styles.activebtn]}
        onPress={() => handleNavigation("GoLive")}
      >
        <Text
          style={[styles.navText, route.name === "GoLive" && styles.activetext]}
        >
          Go Live
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, route.name === "Epaper" && styles.activebtn]}
        onPress={() => handleNavigation("Epaper")}
      >
        <Text
          style={[styles.navText, route.name === "Epaper" && styles.activetext]}
        >
          Epaper
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, route.name === "Videos" && styles.activebtn]}
        onPress={() => handleNavigation("Videos")}
      >
        <Text
          style={[styles.navText, route.name === "Videos" && styles.activetext]}
        >
          Videos
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 10,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    marginTop: 10,
    zIndex: 99,
    paddingHorizontal: 10,
    bottom: 0,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "23%",
    height: 40,
    // paddingHorizontal: 15,
    // paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  activebtn: {
    borderColor: "white",
    backgroundColor: "#AA7777",
  },
  activetext: {
    color: "white",
  },
  navText: {
    // color: 'white',
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default BottomNavBar;
