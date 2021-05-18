import React, {useState} from 'react';
import {TouchableOpacity, StatusBar} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SwapOnboarding from '../../components/swapOnboarding';
import {Container, Text, ContainerButtons} from './styles';
import IndexCurrentScreen from './indexCurrentScreen';
import {translate} from '../../locales';
import OnboardingIcons from '../../assets/images';
import OnboardingDots from '../../components/onboardingDots';

const Tab = createMaterialTopTabNavigator();

const OnboardingOne = () => {
  return (
    <SwapOnboarding
      title={translate('welcomeToBrazil')}
      img={OnboardingIcons.find(value => value.name === 'brazilMap').value}
    />
  );
};
const OnboardingTwo = () => {
  return (
    <SwapOnboarding
      title={translate('helloFriend')}
      description={translate('thisAppFinally')}
      img={OnboardingIcons.find(value => value.name === 'map').value}
    />
  );
};
const OnboardingThree = () => {
  return (
    <SwapOnboarding
      description={translate('thisAppObjective')}
      img={OnboardingIcons.find(value => value.name === 'mountain').value}
    />
  );
};

const Onboarding = ({navigation}) => {
  const [textPreviousButton, setPreviousTextButton] = useState('');
  const [textNextButton, setNextTextButton] = useState(translate('next'));

  const getScreen = () => {
    switch (IndexCurrentScreen.currentScreen) {
      case 1:
        return 'onboardingOne';
      case 2:
        return 'onboardingTwo';
      case 3:
        return 'onboardingThree';
    }
  };

  const previous = () => {
    if (IndexCurrentScreen.currentScreen > 1) {
      IndexCurrentScreen.removeIndex();
      navigation.navigate(getScreen());
    }

    if (IndexCurrentScreen.currentScreen === 2) {
      setNextTextButton(translate('next'));
    }

    if (IndexCurrentScreen.currentScreen === 1) {
      setPreviousTextButton('');
    }
  };

  const next = () => {
    if (IndexCurrentScreen.currentScreen < 3) {
      IndexCurrentScreen.addIndex();
      navigation.navigate(getScreen());
    }

    if (IndexCurrentScreen.currentScreen === 3) {
      setNextTextButton(translate('conclude'));
    }

    if (IndexCurrentScreen.currentScreen === 2) {
      setPreviousTextButton(translate('previous'));
    }
  };

  const goToHome = () => {
    navigation.navigate('home');
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="default" />
      <Container>
        <Tab.Navigator
          swipeEnabled={false}
          tabBarOptions={{style: {display: 'none'}}}
          sceneContainerStyle={{backgroundColor: 'transparent', padding: 20}}>
          <Tab.Screen name="onboardingOne" component={OnboardingOne} />
          <Tab.Screen name="onboardingTwo" component={OnboardingTwo} />
          <Tab.Screen name="onboardingThree" component={OnboardingThree} />
        </Tab.Navigator>
        <OnboardingDots currentScreenIndex={IndexCurrentScreen.currentScreen} />
        <ContainerButtons>
          <TouchableOpacity
            isFirstScreen={IndexCurrentScreen.currentScreen == 1}
            onPress={() => previous()}>
            <Text>{textPreviousButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              IndexCurrentScreen.currentScreen === 3 ? goToHome() : next()
            }>
            <Text>{textNextButton}</Text>
          </TouchableOpacity>
        </ContainerButtons>
      </Container>
    </>
  );
};

export default Onboarding;
