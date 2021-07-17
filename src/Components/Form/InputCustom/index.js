import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { InputArea, Input } from "./styles";

const InputCustom = ({ icon, color, password, ...props }) => {
  return (
    <InputArea>
      <MaterialCommunityIcons name={icon} size={24} color={color} />

      <Input
        placeholderTextColor="#7f7f7f"
        secureTextEntry={password}
        {...props}
      />
    </InputArea>
  );
};

export default InputCustom;
