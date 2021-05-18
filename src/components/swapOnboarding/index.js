import React from 'react';
import {SvgXml} from 'react-native-svg';

import {Container, TitleText, DescriptionText, ContainerImage} from './styles';

const SwapOnboarding = ({title, description, img}) => {
  return (
    <Container>
      <ContainerImage>
        <SvgXml xml={img} width="90%" height="90%" />
      </ContainerImage>

      <TitleText>{title}</TitleText>
      <DescriptionText>{description}</DescriptionText>
    </Container>
  );
};

export default SwapOnboarding;
