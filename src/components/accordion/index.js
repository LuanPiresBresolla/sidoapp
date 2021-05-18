import React from 'react';

import {Container, ContainerScroll} from './styles';
import Card from './card';
import Dictionary from '../../helper/dictionary';

const accordion = () => {
  return (
    <Container>
      <ContainerScroll>
        {Dictionary.map(value => (
          <Card value={value} key={value.alphabet} />
        ))}
      </ContainerScroll>
    </Container>
  );
};

export default accordion;
