import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopNavBar from "../components/TopNavBar";
import BottomNavBar from "../components/BottomNavBar";

const Epaper = () => {
  return (
    <View style={styles.container}>
      <TopNavBar />
      {/* <Text>Epaper</Text> */}
      {/* Main Head For News */}
      <View style={styles.mainHead}>
        <Text style={styles.mainHeadText}>E-Paper</Text>
      </View>
      {/* Main Body  For News */}
      <View style={styles.mainBody}>
        <Text style={styles.mainBodyText}>E-Paper</Text>
      </View>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "flex-start",
  },
  mainHead: {
    height: "10%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainHeadText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mainBody: {
    height: "80%",
    backgroundColor: "#fff",
    padding: 10,
    textAlign: "justify",
  },
  mainBodyText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Epaper;
