import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 60px;
  margin-bottom: 40px;
`;

export const ContainerLeft = styled.View``;

export const ContainerRight = styled.View``;

export const Circle = styled.View`
  background-color: ${props => (props.firstCircle ? '#000' : '#D21034')};
  width: 100%;
  height: 600px;
  border-radius: 300px;
  transform: scaleX(2);
  top: ${props => (props.firstCircle ? '-477px' : '-480px')};
  opacity: ${props => (props.firstCircle ? '0.1' : '1')};
  position: absolute;
`;
