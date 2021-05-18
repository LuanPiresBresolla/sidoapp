import styled from 'styled-components/native';

export const Container = styled.View`
  width: 99%;
  flex: -1;
  min-height: 50px;
  margin-bottom: 10px;
  background-color: #FFF;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ContainerTest = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TitleContainer = styled.Text`
    font-size: 18px;
    top: 15px;
    align-self: flex-start;
`;

export const Arrow = styled.ImageBackground`
    width: 20px;
    height: 20px;
    top: 15px;
    align-self: flex-start;
`;

export const ButtonCard = styled.TouchableOpacity`    
    width: 100%;
    height: 100%;
    display: flex;   
    flex-direction: column;
`;