import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: #d21034;
  margin-top: 30px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
`;

export const TitleScreen = styled.Text`
  align-self: center;
  margin-top: 30px;
  color: #fff;
  font-size: 24px;
  width: 60%;
  text-align: center;
`;

export const ContainerBackButton = styled.TouchableOpacity`
  width: 20%;
`;

export const BackButton = styled.Text`
  align-self: center;
  margin-top: 40px;
  color: #fff;
  font-size: 18px;
  text-align: center;
`;

export const ContainerText = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding-top: 40px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextPresentation = styled.Text`
  width: 95%;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  margin-top: 50px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
