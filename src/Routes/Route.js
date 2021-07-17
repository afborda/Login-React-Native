import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";

// import { Container } from './styles';

function Routes() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default Routes;
