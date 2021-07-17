import React, { useContext, useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";

import { checkToken } from "../../service/Auth";
import { UserContext } from "../../context/UserContext";

const SignUp = () => {
  const navigation = useNavigation();
  const { dispatch: userDispatch } = useContext(UserContext);

  useEffect(() => {
    const checkTokenRelease = async () => {
      const token = await AsyncStorage.getItem("@TOKEN");

      if (token) {
        const data = {
          token: token,
        };

        const newToken = await checkToken(data);

        if (newToken.token) {
          await AsyncStorage.setItem("@TOKEN", newToken.token);

          userDispatch({
            type: "setAvatar",
            payload: {
              avatar: newToken.data.avatar,
            },
          });

          navigation.reset({
            routes: [{ name: "Home" }],
          });
        } else {
          navigation.navigate("SignIn");
        }
      } else {
        navigation.navigate("SignIn");
      }
    };

    checkTokenRelease();
  }, []);

  return (
    <Container>
      <LottieView
        style={{ width: 300 }}
        source={require("../../assets/task.json")}
        loop
        autoPlay
      />
    </Container>
  );
};

export default SignUp;
