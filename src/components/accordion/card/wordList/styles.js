import styled from 'styled-components/native';

export const Container = styled.View`
  margin: ${props => (props.isExpanded ? '20px' : '0px')};
`;

export const Text = styled.Text`
  font-size: 16px;
`;

export const ContainerWord = styled.View``;
