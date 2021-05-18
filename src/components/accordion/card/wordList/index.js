import React from 'react';

import {Container, Text, ContainerWord} from './styles';

const WordList = ({words, isExpanded}) => {
  return (
    <Container isExpanded={isExpanded}>
      {words.map(value => (
        <ContainerWord key={value.pt + '-' + value.ht}>
          <Text>
            {' '}
            <Text style={{fontWeight: 'bold'}}>{value.pt}</Text> - {value.ht}
          </Text>
        </ContainerWord>
      ))}
    </Container>
  );
};

export default WordList;
