import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #7a1025;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
`;
export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #7a1025;
  font-weight: 700;
`;
export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;
export const SighMessageButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
export const SighMessageButtonTextBold = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding-left: 5px;
`;
