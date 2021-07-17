import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../Page/Preload";
import SignIn from "../Page/SignIn";
import SingUp from "../Page/SignUp";
import TabNavigation from "./MainTab";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default MainStack;
