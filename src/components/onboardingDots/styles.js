import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  height: 10px;
  width: 50px;
  align-self: center;
`;

export const Dot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 20px;
  background-color: ${props => (props.isActivate ? '#808080' : '#a0a0a0')};
  margin: 5px;
`;
