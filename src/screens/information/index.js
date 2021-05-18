import React from 'react';

import {translate} from '../../locales';
import {
  Container,
  ContainerHeader,
  ContainerBackButton,
  BackButton,
  TitleScreen,
  ContainerText,
  TextPresentation,
} from './styles';

const Information = ({navigation}) => {
  return (
    <Container>
      <ContainerHeader>
        <ContainerBackButton onPress={() => navigation.navigate('home')}>
          <BackButton>{translate('toBack')}</BackButton>
        </ContainerBackButton>
        <TitleScreen>{translate('informationMenu')}</TitleScreen>
      </ContainerHeader>
      <ContainerText>
        <TextPresentation>{translate('informationText1')}</TextPresentation>
        <TextPresentation>{translate('informationText2')}</TextPresentation>
        <TextPresentation>{translate('informationText3')}</TextPresentation>
        <TextPresentation>{translate('informationText4')}</TextPresentation>
        <TextPresentation>{translate('informationText5')}</TextPresentation>
        <TextPresentation>{translate('informationText6')}</TextPresentation>
      </ContainerText>
    </Container>
  );
};

export default Information;
