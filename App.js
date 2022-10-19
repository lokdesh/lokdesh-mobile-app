import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useLayoutEffect, useState } from "react";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import Screen4 from "./src/screens/Screen4";
import Home from "./src/screens/Home";
import Epaper from "./src/screens/Epaper";
import GoLive from "./src/screens/GoLive";
import Videos from "./src/screens/Videos";
import { MenuProvider } from "react-native-popup-menu";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GoLive">
          {/* Splash Screen 1 */}
          <Stack.Screen name="Screen1" options={{ headerShown: false }}>
            {(props) => <Screen1 />}
          </Stack.Screen>
          {/* Splash Screen 2 */}
          <Stack.Screen name="Screen2" options={{ headerShown: false }}>
            {(props) => <Screen2 />}
          </Stack.Screen>
          {/* Splash Screen 3 */}
          <Stack.Screen name="Screen3" options={{ headerShown: false }}>
            {(props) => <Screen3 />}
          </Stack.Screen>
          {/* Splash Screen 4 */}
          <Stack.Screen name="Screen4" options={{ headerShown: false }}>
            {(props) => <Screen4 />}
          </Stack.Screen>
          {/* Home Screen */}
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
          >
            {(props) => <Home heading={"Home"} />}
          </Stack.Screen>
          {/* GoLive Screen */}
          <Stack.Screen
            name="GoLive"
            options={{
              headerShown: false,
            }}
          >
            {(props) => <GoLive />}
          </Stack.Screen>
          {/* Epaper Screen */}
          <Stack.Screen
            name="Epaper"
            options={{
              headerShown: false,
            }}
          >
            {(props) => <Epaper />}
          </Stack.Screen>
          {/* Videos Screen */}
          <Stack.Screen
            name="Videos"
            options={{
              headerShown: false,
            }}
          >
            {(props) => <Videos />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({});
