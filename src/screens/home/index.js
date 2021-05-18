import React from 'react';
import {ScrollView, StatusBar, Linking} from 'react-native';

import {translate} from '../../locales';
import MenuFactory from '../../helper/menu';
import Icon from '../../components/icon';

import {Container, Circle, ContainerRight, ContainerLeft} from './styles';

const Index = ({navigation}) => {
  let elementsLeft = [];
  let elementsRight = [];

  const getOnPress = menu => {
    if (menu.existScreen) {
      return navigation.navigate(menu.name);
    }

    if (menu.url !== '') {
      toURL(menu.url);
    }

    return null;
  };

  const toURL = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  for (let i = 0; i < MenuFactory.length; i++) {
    if (i % 2 === 0) {
      elementsRight.push(
        <Icon
          key={MenuFactory[i].id}
          text={translate(MenuFactory[i].text)}
          icon={MenuFactory[i].icon}
          onPress={() => getOnPress(MenuFactory[i])}
        />,
      );
    } else {
      elementsLeft.push(
        <Icon
          key={MenuFactory[i].id}
          text={translate(MenuFactory[i].text)}
          icon={MenuFactory[i].icon}
          onPress={() => getOnPress(MenuFactory[i])}
        />,
      );
    }
  }

  return (
    <>
      <StatusBar translucent backgroundColor="#D21034" barStyle="default" />
      <Circle firstCircle={true} />
      <Circle firstCircle={false} />
      <ScrollView>
        <Container>
          <ContainerRight>{elementsRight}</ContainerRight>

          <ContainerLeft>{elementsLeft}</ContainerLeft>
        </Container>
      </ScrollView>
    </>
  );
};

export default Index;
