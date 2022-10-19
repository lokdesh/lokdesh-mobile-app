import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Share,
  StyleSheet,
} from "react-native";
import { Video } from "expo-av";
import Ionic from "react-native-vector-icons/Ionicons";
const SingleReel = ({ item, index, currentIndex }) => {
  const videoRef = useRef(null);
  const PlaybuttonRef = useRef(null);
  const [status, setStatus] = useState({});
  const [mute, setMute] = useState(true);
  const [like, setLike] = useState(item.isLike);
  const [count, setcount] = useState(0);

  useEffect(() => {
    if (index === currentIndex) {
      videoRef.current.playAsync();
    } else {
      videoRef.current.pauseAsync();
    }
    PlaybuttonRef.current.setNativeProps({
      style: {
        padding: 0,
        height: 0,
      },
    });
  }, [currentIndex]);
  const onBuffer = (buffer) => {
    console.log("buffring", buffer);
  };
  const onError = (error) => {
    console.log("error", error);
  };
  const handlePlay = () => {
    status.isPlaying
      ? videoRef.current.pauseAsync()
      : videoRef.current.playAsync();

    // on double click like feature
    if (count === 1) {
      setLike(!like);
    }
    setcount(count + 1);
    setTimeout(() => {
      setcount(0);
    }, 300);

    if (status.isPlaying) {
      PlaybuttonRef.current.setNativeProps({
        style: {
          padding: 15,
          height: 55,
        },
      });
    } else {
      PlaybuttonRef.current.setNativeProps({
        style: {
          padding: 0,
          height: 0,
        },
      });
    }
  };
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handlePlay}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <Video
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          source={{
            uri: item.video,
          }}
          isMuted={mute}
          style={{
            width: "100%",
            minHeight: "10%",
            height: "100%",
            position: "absolute",
          }}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </TouchableOpacity>
      {/* Play Pause Button */}
      <TouchableOpacity
        ref={PlaybuttonRef}
        onPress={handlePlay}
        style={{
          padding: 15,
          height: 55,
          backgroundColor: "rgba(0,0,0,0.3)",
          borderRadius: 50,
        }}
      >
        <Ionic
          name={status.isPlaying ? "pause" : "play"}
          style={styles.btnIcon}
        />
      </TouchableOpacity>
      {/* bottom buttons */}
      <View
        style={{
          position: "absolute",
          // width: windowWidth,
          flexDirection: "column",
          right: 0,
          bottom: 40,
          zIndex: 1,
          alignItems: "flex-end",
          padding: 10,
          paddingTop: 0,
          // backgroundColor: 'rgba(52,52,52,0.6)',
        }}
      >
        {/* Like ,Comment and Share Button */}
        {/* Like */}
        <TouchableOpacity onPress={() => setLike(!like)} style={styles.btn}>
          <Ionic
            name="heart"
            style={[styles.btnIcon, { color: like ? "red" : "white" }]}
          />
          <Text style={styles.btnText}>{item.likes}</Text>
        </TouchableOpacity>
        {/* comment */}
        <TouchableOpacity onPress={() => alert("comment")} style={styles.btn}>
          <Ionic name="chatbubble-ellipses-outline" style={styles.btnIcon} />
          <Text style={styles.btnText}>{item.comments}</Text>
        </TouchableOpacity>
        {/* share button */}
        <TouchableOpacity style={styles.btn} onPress={handleShare}>
          <Ionic name="share-social-outline" style={styles.btnIcon} />
        </TouchableOpacity>
      </View>
      {/* User Profile */}
      <TouchableOpacity
        style={{
          position: "absolute",
          width: windowWidth,
          zIndex: 1,
          bottom: 0, //edited
          padding: 10,
          height: 50,
          backgroundColor: "rgba(0,0,0,0.3)",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {/* user profile */}
        <Image
          source={{ uri: item.userImage }}
          style={{
            width: 33,
            height: 33,
            borderRadius: 20,
          }}
        />
        <Text
          style={{
            fontSize: 14,
            marginHorizontal: 10,
            paddingRight: 10,
            color: "#fff",
          }}
        >
          {item.username}
        </Text>
        {/* Sound Button */}
        <TouchableOpacity
          onPress={() => setMute(!mute)}
          style={{
            position: "absolute",
            width: windowWidth,
            top: 0,
            right: 0,
          }}
        >
          <Ionic
            name={mute ? "volume-mute" : "volume-high"}
            style={{
              color: "white",
              fontSize: 20,
              position: "absolute",
              right: 15,
              padding: 10,
              // backgroundColor: "red",
            }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default SingleReel;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight - 27,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    padding: 10,
  },
  btnIcon: {
    color: "white",
    fontSize: 25,
  },
  btnText: {
    color: "white",
  },
});
