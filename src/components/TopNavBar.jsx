import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";
const TopNavBar = () => {
  const navigation = useNavigation();
  const handleNavigation = (val) => {
    navigation.navigate(val);
  };
  const { Popover } = renderers;
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => handleNavigation("Home")}>
        <Image
          resizeMode="contain"
          style={styles.logoStytle}
          source={require("../../assets/favicon.png")}
        />
      </TouchableOpacity>
      <Menu
        onSelect={(value) => handleNavigation(value)}
        style={styles.menuStyle}
        renderer={Popover}
        rendererProps={{ preferredPlacement: "bottom" }}
      >
        <MenuTrigger>
          <Image
            resizeMode="contain"
            style={styles.iconStytle}
            source={{
              uri: "https://img.icons8.com/ios-filled/50/000000/menu-2.png",
            }}
          />
        </MenuTrigger>
        <MenuOptions
          optionsContainerStyle={styles.menuOptionsStyle}
          customStyles={{
            optionText: styles.optionTextStyle,
          }}
        >
          <MenuOption value="Home">
            <Text style={styles.dropDownText}>Home</Text>
          </MenuOption>
          <MenuOption value="Epaper">
            <Text style={styles.dropDownText}>Epaper</Text>
          </MenuOption>
          <MenuOption value="Search">
            <Text style={styles.dropDownText}>Search</Text>
          </MenuOption>
          <MenuOption value="Login">
            <Text style={styles.dropDownText}>Logout</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    marginTop: 35,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(102 ,0, 0 , 0.59)",
  },
  logoStytle: {
    width: 100,
    height: 50,
  },
  iconStytle: {
    width: "100%",
    height: 30,
    aspectRatio: 0.7,
  },
  dropDownText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  menuOptionsStyle: {
    // backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: 150,
    height: 170,
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
  },
  optionTextStyle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});

export default TopNavBar;
