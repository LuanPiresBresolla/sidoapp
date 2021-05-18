import React from 'react';

import {translate} from '../../locales';
import {
  Container,
  ContainerHeader,
  ContainerBackButton,
  TitleScreen,
  BackButton,
} from './styles';
import Accordion from '../../components/accordion';

const WordGuide = ({navigation}) => {
  return (
    <Container>
      <ContainerHeader>
        <ContainerBackButton onPress={() => navigation.navigate('home')}>
          <BackButton>{translate('toBack')}</BackButton>
        </ContainerBackButton>
        <TitleScreen>{translate('wordGuideMenu')}</TitleScreen>
      </ContainerHeader>

      <Accordion />
    </Container>
  );
};

export default WordGuide;
