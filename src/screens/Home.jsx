import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import TopNavBar from "../components/TopNavBar";
import HomeNewsVideo from "../components/HomeNewsVideo";
import HomeNewsPhoto from "../components/HomeNewsPhoto";
import BottomNavBar from "../components/BottomNavBar";
import SwiperFlatList from "react-native-swiper-flatlist";
import HomeAds from "../components/HomeAds";
import Ionic from "react-native-vector-icons/Ionicons";

const Home = () => {
  const [AdsData, setAdsData] = useState([
    {
      sponsored: true,
      Video:
        "https://player.vimeo.com/external/546230348.sd.mp4?s=4d647b0709384deba5fd01685fbd9b796c9adc9f&profile_id=165&oauth2_token_id=57447761",
      Photo:
        "https://images.pexels.com/photos/8105037/pexels-photo-8105037.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Abhay",
    },
    {
      sponsored: true,
      Video: null,
      Photo:
        "https://images.unsplash.com/photo-1657664049364-01bdba8ec858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "Yash",
    },
    {
      sponsored: true,
      Video:
        "https://player.vimeo.com/progressive_redirect/playback/734295186/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=45a04e910ce3596ff5c17ec65fe32b0d8589678365330b08900a03a33f5b4e0f",
      Photo: null,
      title: "Ram_Charan",
    },
  ]);
  const [showAds, setshowAds] = useState(true);
  const [NewsData, setNewsData] = useState([
    {
      _id: 0,
      Heading: "यूनिकॉर्न ड्रीम्स",
      SubHeading:
        " हैवेल्स के ग्लोबल ब्रांड बनने की कहानी: छोटे-छोटे बिजनेस खरीदे, प्रोडक्ट ऐसे बनाए, जो बिना बटन दबाए हमारी जरूरत समझ लें",
      Video:
        "https://player.vimeo.com/external/546230348.sd.mp4?s=4d647b0709384deba5fd01685fbd9b796c9adc9f&profile_id=165&oauth2_token_id=57447761",
      Photo:
        "https://images.pexels.com/photos/8105037/pexels-photo-8105037.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      Type: "देश",
      Likes: ["sdfghjkl", "swedrftgyhjukj", "sdfghjkl"],
    },
    {
      _id: 1,
      Heading: "यूनिकॉर्न ड्रीम्स",
      SubHeading:
        " हैवेल्स के ग्लोबल ब्रांड बनने की कहानी: छोटे-छोटे बिजनेस खरीदे, प्रोडक्ट ऐसे बनाए, जो बिना बटन दबाए हमारी जरूरत समझ लें",
      Video: null,
      Photo:
        "https://images.unsplash.com/photo-1657664049364-01bdba8ec858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      Type: "एशिया कप",
      Likes: ["sdfghjkl", "swedrftgyhjukj", "sdfghjkl"],
    },
    {
      _id: 2,
      Heading: "यूनिकॉर्न ड्रीम्स",
      SubHeading:
        " हैवेल्स के ग्लोबल ब्रांड बनने की कहानी: छोटे-छोटे बिजनेस खरीदे, प्रोडक्ट ऐसे बनाए, जो बिना बटन दबाए हमारी जरूरत समझ लें",
      Video:
        "https://player.vimeo.com/progressive_redirect/playback/734295186/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=45a04e910ce3596ff5c17ec65fe32b0d8589678365330b08900a03a33f5b4e0f",
      Photo: null,
      Type: "रांची",
      Likes: ["sdfghjkl", "swedrftgyhjukj", "sdfghjkl"],
    },
    {
      _id: 3,
      Heading: "यूनिकॉर्न ड्रीम्स",
      SubHeading:
        " हैवेल्स के ग्लोबल ब्रांड बनने की कहानी: छोटे-छोटे बिजनेस खरीदे, प्रोडक्ट ऐसे बनाए, जो बिना बटन दबाए हमारी जरूरत समझ लें",
      Video:
        "https://player.vimeo.com/external/546230348.sd.mp4?s=4d647b0709384deba5fd01685fbd9b796c9adc9f&profile_id=165&oauth2_token_id=57447761",
      Photo:
        "https://images.pexels.com/photos/8105037/pexels-photo-8105037.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      Type: "देश",
      Likes: ["sdfghjkl", "swedrftgyhjukj", "sdfghjkl"],
    },
    {
      _id: 4,
      Heading: "यूनिकॉर्न ड्रीम्स",
      SubHeading:
        " हैवेल्स के ग्लोबल ब्रांड बनने की कहानी: छोटे-छोटे बिजनेस खरीदे, प्रोडक्ट ऐसे बनाए, जो बिना बटन दबाए हमारी जरूरत समझ लें",
      Video: null,
      Photo:
        "https://images.unsplash.com/photo-1657664049364-01bdba8ec858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      Type: "एशिया कप",
      Likes: ["sdfghjkl", "swedrftgyhjukj", "sdfghjkl"],
    },
    {
      _id: 5,
      Heading: "यूनिकॉर्न ड्रीम्स",
      SubHeading:
        " हैवेल्स के ग्लोबल ब्रांड बनने की कहानी: छोटे-छोटे बिजनेस खरीदे, प्रोडक्ट ऐसे बनाए, जो बिना बटन दबाए हमारी जरूरत समझ लें",
      Video:
        "https://player.vimeo.com/progressive_redirect/playback/734295186/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=45a04e910ce3596ff5c17ec65fe32b0d8589678365330b08900a03a33f5b4e0f",
      Photo: null,
      Type: "रांची",
      Likes: ["sdfghjkl", "swedrftgyhjukj", "sdfghjkl"],
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };
  const showAndRemoveAds = () => {
    setshowAds(false);
  };
  const handleSetAds = (i) => {
    setshowAds(true);
    setAdsData([NewsData[i]]);
  };
  return (
    <View style={styles.container}>
      <TopNavBar />
      <SafeAreaView style={styles.safeview}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.newsFilters}
        >
          <TouchableOpacity style={styles.newsFilter}>
            <Ionic name="star-outline" size={20} color="white" />
            <Text style={styles.newsFilterText}>टॉप न्यूज़</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsFilter}>
            <Ionic name="car-outline" size={20} color="white" />
            <Text style={styles.newsFilterText}>टेक - ऑटो</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsFilter}>
            <Ionic name="bulb-outline" size={20} color="white" />
            <Text style={styles.newsFilterText}>यूटिलिटी</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsFilter}>
            <Ionic name="business-outline" size={20} color="white" />
            <Text style={styles.newsFilterText}>बिजनेस</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsFilter}>
            <Ionic name="football-outline" size={20} color="white" />
            <Text style={styles.newsFilterText}>स्पोर्ट्स</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsFilter}>
            <Ionic name="location-outline" size={20} color="white" />
            <Text style={styles.newsFilterText}>राज्य-शहर</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsFilter}>
            <Ionic name="star-outline" size={20} color="white" />
            <Text style={styles.newsFilterText}>टॉप न्यूज़</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsFilter}>
            <Ionic name="car-outline" size={20} color="white" />
            <Text style={styles.newsFilterText}>टेक - ऑटो</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsFilter}>
            <Ionic name="bulb-outline" size={20} color="white" />
            <Text style={styles.newsFilterText}>यूटिलिटी</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsFilter}>
            <Ionic name="business-outline" size={20} color="white" />
            <Text style={styles.newsFilterText}>बिजनेस</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsFilter}>
            <Ionic name="football-outline" size={20} color="white" />
            <Text style={styles.newsFilterText}>स्पोर्ट्स</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsFilter}>
            <Ionic name="location-outline" size={20} color="white" />
            <Text style={styles.newsFilterText}>राज्य-शहर</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      {showAds && (
        <View style={styles.adsContainer}>
          {/* Sposponsored Text */}
          {/* close button */}
          <TouchableOpacity
            style={styles.AdsCloseButton}
            onPress={showAndRemoveAds}
          >
            <Ionic name="close-outline" size={16} color="#fff" />
          </TouchableOpacity>
          <SwiperFlatList
            autoplay
            autoplayDelay={5}
            autoplayLoop
            index={currentIndex}
            showPagination
            data={AdsData}
            handleChangeIndex={handleChangeIndexValue}
            paginationStyleItem={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "white",
            }}
            renderItem={({ item, index }) => (
              <HomeAds
                AdsVideo={item.Video}
                sponsored={item.sponsored}
                index={index}
                AdsPhoto={item.Photo}
                title={item.title}
              />
            )}
          />
        </View>
      )}

      <ScrollView contentContainerStyle={styles.posts}>
        {NewsData.map((item, index) =>
          item.Video ? (
            <HomeNewsVideo
              key={index}
              index={index}
              handleSetAds={handleSetAds}
              NewsVideo={item.Video}
              Likes={item.Likes}
              Heading={item.Heading}
              SubHeading={item.SubHeading}
              Type={item.Type}
            />
          ) : (
            <HomeNewsPhoto
              key={index}
              index={index}
              NewsPhoto={item.Photo}
              Likes={item.Likes}
              Heading={item.Heading}
              SubHeading={item.SubHeading}
              Type={item.Type}
            />
          )
        )}
      </ScrollView>
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
  headerLogo: {
    width: "81vw",
    aspectRatio: 135 / 76,
    display: "flex",
    alignItems: "stretch",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  posts: {
    width: "97%",
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 10,
    zIndex: -1,
    paddingBottom: 100,
  },
  adsContainer: {
    width: "100%",
    height: "20%",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignSelf: "center",
    zIndex: -1,
    marginBottom: 10,
  },
  safeview: {
    // flex: 0.07,
    height: "6%",
    width: "100%",
    zIndex: -1,
    marginBottom: 10,
  },
  newsFilters: {
    height: 150,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(102 ,0, 0 , 0.59)",
    paddingRight: 240,
  },
  newsFilter: {
    width: "12%",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  newsFilterText: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
  },
  AdsCloseButton: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    // backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default Home;
