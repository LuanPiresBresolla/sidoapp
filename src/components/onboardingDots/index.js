import React from 'react';

import {Container, Dot} from './styles';

const OnboardingDots = ({currentScreenIndex}) => {
  return (
    <Container>
      <Dot isActivate={currentScreenIndex === 1} />
      <Dot isActivate={currentScreenIndex === 2} />
      <Dot isActivate={currentScreenIndex === 3} />
    </Container>
  );
};
export default OnboardingDots;
