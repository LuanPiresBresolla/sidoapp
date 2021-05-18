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
import {
  Location,
  Salutation,
  AirportAndBusStation,
  Transport,
  InHotel,
} from './tabs';

const Tab = createMaterialTopTabNavigator();

const PhraseGuide = ({navigation}) => {
  return (
    <Container>
      <ContainerHeader>
        <ContainerBackButton onPress={() => navigation.navigate('home')}>
          <BackButton>{translate('toBack')}</BackButton>
        </ContainerBackButton>
        <TitleScreen>{translate('phraseGuideMenu')}</TitleScreen>
      </ContainerHeader>

      <ContainerTabs>
        <Tab.Navigator
          tabBarOptions={{style: {display: 'none'}}}
          sceneContainerStyle={{backgroundColor: 'transparent', padding: 20}}>
          <Tab.Screen name="Salutation" component={Salutation} />
          <Tab.Screen name="Transport" component={Transport} />
          <Tab.Screen
            name="AirportAndBusStation"
            component={AirportAndBusStation}
          />
          <Tab.Screen name="InHotel" component={InHotel} />
          <Tab.Screen name="Location" component={Location} />
        </Tab.Navigator>
      </ContainerTabs>
    </Container>
  );
};

export default PhraseGuide;
