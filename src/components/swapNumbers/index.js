import React from 'react';
import {StyleSheet} from 'react-native';

import {
  Container,
  ContainerNumber,
  ContainerScroll,
  OriginalText,
  Title,
} from './styles';

const SwapNumbers = ({numbers, title}) => {
  let elements = [];
  let maxCount =
    numbers.pt_br.length > numbers.numeral.length
      ? numbers.pt_br.length
      : numbers.numeral.length; //Deverá sempre escolher como contador o menor tamanho do array

  for (let i = 0; i < maxCount; i++) {
    elements.push(
      <ContainerNumber
        style={styles.shadowContainerStyle}
        key={'container' + i}>
        <OriginalText key={i}>
          {numbers.numeral[i]} - {numbers.pt_br[i]}{' '}
        </OriginalText>
      </ContainerNumber>,
    );
  }

  return (
    <Container>
      <Title>{title}</Title>
      <ContainerScroll>{elements}</ContainerScroll>
    </Container>
  );
};

const styles = StyleSheet.create({
  shadowContainerStyle: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default SwapNumbers;
