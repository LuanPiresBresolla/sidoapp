import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {translate} from '../../locales';
import {
  Container,
  ContainerTabs,
  ContainerHeader,
  ContainerBackButton,
  TitleScreen,
  BackButton,
} from './styles';
import {Numbers as NumbersTab, Months, Currency} from './tabs';

const Tab = createMaterialTopTabNavigator();

const Numbers = ({navigation}) => {
  return (
    <Container>
      <ContainerHeader>
        <ContainerBackButton onPress={() => navigation.navigate('home')}>
          <BackButton>{translate('toBack')}</BackButton>
        </ContainerBackButton>
        <TitleScreen>{translate('numbersMenu')}</TitleScreen>
      </ContainerHeader>

      <ContainerTabs>
        <Tab.Navigator
          tabBarOptions={{style: {display: 'none'}}}
          sceneContainerStyle={{backgroundColor: 'transparent', padding: 20}}>
          <Tab.Screen name="Numbers" component={NumbersTab} />
          <Tab.Screen name="Months" component={Months} />
          <Tab.Screen name="Currency" component={Currency} />
        </Tab.Navigator>
      </ContainerTabs>
    </Container>
  );
};

export default Numbers;
