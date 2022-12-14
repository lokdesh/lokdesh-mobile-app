import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
const Screen4 = () => {
  const otpRef = useRef(null);
  const navigation = useNavigation();
  const [show, setshow] = useState(true);
  const [verified, setverified] = useState(false);
  const [number, setnumber] = useState("");
  const [otpSection, setotpSection] = useState(false);
  const onChangeNumber = (text) => {
    setnumber(text.replace(/[^0-9]/g, ""));
  };
  const getLink = () => {
    setverified(true);
    setotpSection(true);
  };
  const handleotp = () => {
    otpRef.current.focus();
  };
  const handleLogin = () => {
    navigation.navigate("Home");
  };
  const [otp, setOtp] = useState([]);
  const [otpVal, setOtpVal] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Text style={styles.topText}>लॉग इन करें</Text>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.mainText}>
          अपना 10 अंकों का मोबाइल नंबर दर्ज करें|
        </Text>
        <View>
          <Image
            resizeMode="contain"
            style={styles.mobileLogo}
            source={require("../../assets/images/mobile.png")}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeNumber(text)}
            value={number}
            placeholder="अपना नंबर दर्ज करें"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={getLink}
          />
        </View>
        {!verified && (
          <TouchableOpacity
            onPress={getLink}
            style={[styles.btn1, verified && { backgroundColor: "#707070" }]}
          >
            <Text style={styles.btn1text}>ओटीपी प्राप्त करें</Text>
          </TouchableOpacity>
        )}
        {!otpSection ? (
          <View>
            <View style={styles.logoContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Screen4")}
                style={styles.logobtn}
              >
                <Image
                  resizeMode="contain"
                  style={styles.googleLogo}
                  source={require("../../assets/images/Google.png")}
                />
                <Image
                  resizeMode="contain"
                  source={require("../../assets/images/GoogleText.png")}
                  style={styles.logobtntext}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Screen4")}
                style={styles.logobtn}
              >
                <Image
                  resizeMode="contain"
                  style={[styles.googleLogo, { width: 56 }]}
                  source={require("../../assets/images/Facebook.jpg")}
                />
                <Text style={styles.logobtntext}>facebook</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text2}>के माध्यम से लॉगिन करें|</Text>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => setshow(false)}
            >
              {show && (
                <Text style={styles.text3}>
                  कोई खाता नहीं है तो रजिस्टर करें|
                </Text>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.otptext}>
              हमने आपके द्वारा दर्ज किए गए नंबर पर 4 अंकों का ओटीपी भेजा है|
            </Text>
            <View style={styles.otpContainer}>
              <TextInput
                ref={otpRef}
                onChangeText={(value) => {
                  if (isNaN(value)) {
                    return;
                  }
                  if (value.length > 6) {
                    return;
                  }
                  let val = value + "------".substr(0, 6 - value.length);
                  let a = [...val];
                  setOtpVal(a);
                  setOtp(value);
                }}
                style={{ opacity: 0 }}
                keyboardType="numeric"
              />
              <View style={styles.otpBoxesContainer}>
                {[0, 1, 2, 3].map((item, index) => (
                  <Text onPress={handleotp} style={styles.otpBox} key={index}>
                    {otp[item]}
                  </Text>
                ))}
              </View>
            </View>
            <TouchableOpacity style={styles.otptextContainer}>
              <Text style={styles.otptext2}>ओटीपी प्राप्त नहीं हुआ </Text>
              <Text style={[styles.otptext2, { color: "black" }]}>
                {" "}
                ओटीपी पुनः भेजें
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {otpSection && (
          <TouchableOpacity onPress={handleLogin} style={styles.BottomNav}>
            <Text style={styles.BottomText}>लॉग इन</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
  topNav: {
    marginTop: 50,
    height: 88,
    backgroundColor: "rgba(102 ,0, 0 , 0.59)",
    alignItems: "center",
    justifyContent: "center",
  },
  topText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  mainContainer: {
    marginTop: 3,
    height: 506,
  },
  mainText: {
    marginLeft: 27,
    marginTop: 167,
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    height: 48,
    paddingLeft: 45,
    borderRadius: 13,
    fontSize: 24,
    fontWeight: "bold",
    selected: "white",
    borderWidth: 2,
    borderColor: "#3b3b3b",
    marginTop: 24,
    alignSelf: "center",
  },
  mobileLogo: {
    position: "absolute",
    top: "42.2%",
    width: 40,
    height: 36,
    left: 25,
  },
  btn1: {
    width: "90%",
    height: 48,
    backgroundColor: "rgba(102 ,0, 0 , 0.59)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    alignSelf: "center",
  },
  btn1text: {
    color: "white",
    fontSize: 24,
  },
  logoContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  logobtn: {
    marginHorizontal: 27.5,
    alignItems: "center",
    justifyContent: "center",
  },
  googleLogo: {
    height: 76,
    width: 76,
  },
  logobtntext: {
    width: 76,
    height: 30,
    fontSize: 15,
    color: "#4267B2",
    textAlign: "center",
    fontWeight: "bold",
  },
  text2: {
    marginTop: 23.5,
    textAlign: "center",
    color: "#666666",
    fontWeight: "bold",
    fontSize: 16,
  },
  text3: {
    textAlign: "center",
    color: "#666666",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomButton: {
    marginTop: 44,
  },
  otptext: {
    marginTop: 23.5,
    color: "#666666",
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 28,
  },
  otpContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  otpBoxesContainer: {
    flexDirection: "row",
  },
  otpBox: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "lightGrey",
    height: 48,
    width: 65,
    textAlign: "center",
    borderRadius: 22,
    fontSize: 20,
  },
  otptext2: {
    color: "#666666",
    fontWeight: "bold",
    fontSize: 16,
  },
  otptextContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  BottomNav: {
    position: "absolute",
    bottom: -130,
    left: 0,
    width: "100%",
    height: 62,
    backgroundColor: "rgba(102 ,0, 0 , 0.59)",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FF0000",
    borderWidth: 1,
  },
  BottomText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default Screen4;
