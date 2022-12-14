import { useRef, useState } from "react";
import BottomNavBar from "../components/BottomNavBar";
import SingleReel from "../components/SingleReel";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const Videos = () => {
  const videoData = [
    {
      video:
        "https://player.vimeo.com/external/546230348.sd.mp4?s=4d647b0709384deba5fd01685fbd9b796c9adc9f&profile_id=165&oauth2_token_id=57447761",
      userImage:
        "https://images.pexels.com/photos/8105037/pexels-photo-8105037.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      username: "Ram_Charan",
      description: "Feel the buity of nature",
      likes: "245k",
      isLike: false,
      comments: "1.2k",
    },
    {
      video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      userImage:
        "https://images.pexels.com/photos/8105037/pexels-photo-8105037.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      username: "Ram_Charan",
      description: "Feel the buity of nature",
      likes: "245k",
      isLike: false,
      comments: "1.2k",
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/734295186/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=45a04e910ce3596ff5c17ec65fe32b0d8589678365330b08900a03a33f5b4e0f",
      userImage:
        "https://images.pexels.com/photos/8105037/pexels-photo-8105037.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      username: "Ram_Charan",
      description: "Feel the buity of nature",
      likes: "245k",
      isLike: false,
      comments: "1.2k",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          height: Dimensions.get("window").height - 27,
        }}
      >
        <SwiperFlatList
          vertical={true}
          onChangeIndex={handleChangeIndexValue}
          data={videoData}
          renderItem={({ item, index }) => (
            <SingleReel item={item} index={index} currentIndex={currentIndex} />
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
      <BottomNavBar />
    </View>
  );
};
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Videos;
