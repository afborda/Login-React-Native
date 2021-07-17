import React, { useContext, useState } from "react";
import { Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { signUp } from "../../service/Auth";
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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  function handleMessageButtonClick() {
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  }

  async function handleSignClick() {
    if (email && password && name) {
      const data = {
        name,
        email,
        password,
      };

      const response = await signUp(data);

      if (response.token) {
        await AsyncStorage.setItem("@TOKEN", response.token);

        userDispatch({
          type: "setAvatar",
          payload: {
            avatar: response.data.avatar,
          },
        });
      } else {
        Alert.alert("Verificar dados nos campos", response.error);
      }
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
          icon="account-circle"
          color="#7f7f7f"
          placeholder="Digite seu nome"
          value={name}
          onChangeText={(t) => setName(t)}
        />
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
        <SighMessageButtonText>Já possui uma conta?</SighMessageButtonText>
        <SighMessageButtonTextBold>Faça Login</SighMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};

export default SignUp;
