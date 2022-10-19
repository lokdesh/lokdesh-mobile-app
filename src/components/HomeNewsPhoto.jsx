import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Share,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import axios from "axios";
const HomeNewsPhoto = ({ Type, NewsPhoto, Heading, SubHeading, Likes }) => {
  const [data, setdata] = useState();
  useEffect(() => {
    // axios.get("http://localhost:3000/NewsPhoto").then((res) => {
    //   setdata(res.data);
    // });
  }, []);
  const shareBtn = () => {
    Share.share({
      message: "Share this news",
    });
  };
  return (
    <View style={styles.post}>
      <View style={styles.contentContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>{Heading} :</Text>
          <Text style={[styles.title, { color: "gray" }]}>{SubHeading}</Text>
        </View>
        <Image style={styles.image} source={{ uri: NewsPhoto }} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.type}>
          <Text style={styles.typeText}>{Type}</Text>
        </View>
        <TouchableOpacity style={styles.like}>
          <Ionic name="heart" size={14} color="white" />
          <Text style={styles.Share}>{Likes.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={shareBtn}>
          <Ionic name="share-social-outline" size={16} />
          <Text style={styles.Share}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    width: "100%",
    height: 155,
    marginBottom: 10,
    backgroundColor: "#dadada",
    paddingHorizontal: 5,
    borderRadius: 5,
    borderColor: "rgba(0,0,0,0.1)",
    borderBottomColor: "rgba(102 ,0, 0 , 0.59)",
    borderBottomWidth: 2,
  },
  contentContainer: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    padding: 3,
  },
  titles: {
    width: "60%",
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  image: {
    width: 160,
    height: 80,
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 22,
    alignItems: "center",
  },
  bottomContainer: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  type: {
    width: "20%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  typeText: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  button: {
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  like: {
    width: "8%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Share: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  playIcon: {
    height: "25%",
    width: "6%",
    position: "absolute",
    top: "37%",
    right: "16%",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    padding: 4,
  },
});
export default HomeNewsPhoto;
