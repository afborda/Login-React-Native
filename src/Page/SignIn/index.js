import React, { useContext, useState } from "react";
import { Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import InputCustom from "../../Components/Form/InputCustom";

import { UserContext } from "../../context/UserContext";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SighMessageButtonText,
  SighMessageButtonTextBold,
} from "./styles";
import { signIn } from "../../service/Auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  function handleMessageButtonClick() {
    navigation.reset({
      routes: [{ name: "SingUp" }],
    });
  }

  function reset() {
    setEmail("");
    setPassword("");
  }

  async function handleSignClick() {
    if (email && password) {
      const data = {
        email,
        password,
      };

      const response = await signIn(data);

      if (response.token) {
        await AsyncStorage.setItem("@TOKEN", response.token);

        userDispatch({
          type: "setAvatar",
          payload: {
            avatar: response.data.avatar,
          },
        });

        // navigation.reset({
        //   routes: [{ name: "Home" }],
        // });
      } else {
        Alert.alert("Tente Novamente", "E-mail e/ou senha estão incorretos!");
      }

      reset();
    } else {
      Alert.alert(
        "Prencha todos os campos",
        "Um ou mais campos estao em branco =/"
      );
    }
  }

  return (
    <Container>
      <Image source={require("../../assets/logo-mvv.png")} />
      <InputArea>
        <InputCustom
          icon="email"
          color="#7f7f7f"
          placeholder="Digite seu email"
          value={email}
          onChangeText={(t) => setEmail(t)}
        />
        <InputCustom
          icon="lock"
          color="#7f7f7f"
          placeholder="Digite sua senha"
          value={password}
          onChangeText={(t) => setPassword(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>Entrar</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton onPress={handleMessageButtonClick}>
        <SighMessageButtonText>
          Ainda não possue uma conta?
        </SighMessageButtonText>
        <SighMessageButtonTextBold>Cadastre-se</SighMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};

export default SignIn;
