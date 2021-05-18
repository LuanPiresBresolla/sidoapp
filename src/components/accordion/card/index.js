import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {
  Container,
  ContainerTest,
  TitleContainer,
  Arrow,
  ButtonCard,
} from './styles';
import ArrowDown from '../../../assets/images/arrow-point-to-down.png';
import ArrowUp from '../../../assets/images/arrow-point-to-up.png';
import WordList from './wordList';

const Card = ({value}) => {
  const [isExpanded, setIsExpanded] = useState(value.isExpanded);
  const wordList = isExpanded ? (
    <WordList words={value.words} isExpanded={isExpanded} />
  ) : (
    <WordList words={[]} isExpanded={isExpanded} />
  );

  const toogle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container isExpanded={isExpanded} style={styles.shadowContainerStyle}>
      <ButtonCard onPress={() => toogle()}>
        <ContainerTest>
          <TitleContainer>{value.alphabet}</TitleContainer>
          <Arrow source={isExpanded ? ArrowUp : ArrowDown} />
        </ContainerTest>
        {wordList}
      </ButtonCard>
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

export default Card;
