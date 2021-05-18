import React from 'react';
import {StyleSheet} from 'react-native';

import {
  Container,
  ContainerPhrase,
  ContainerScroll,
  OriginalText,
  TranslatedText,
  Title,
} from './styles';

const SwapGuide = ({phrases, title}) => {
  let elements = [];
  let maxCount =
    phrases.pt_br.length > phrases.ht_hat.length
      ? phrases.ht_hat.length
      : phrases.pt_br.length; //Deverá sempre escolher como contador o menor tamanho do array

  for (let i = 0; i < maxCount; i++) {
    elements.push(
      <ContainerPhrase
        style={styles.shadowContainerStyle}
        key={'container' + i}>
        <OriginalText key={'original' + i}>{phrases.pt_br[i]}</OriginalText>
        <TranslatedText key={'translated' + i}>
          {phrases.ht_hat[i]}
        </TranslatedText>
      </ContainerPhrase>,
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

export default SwapGuide;
