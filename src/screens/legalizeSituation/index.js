import React from 'react';
import {StyleSheet, Linking} from 'react-native';

import {translate} from '../../locales';

import {
  Container,
  ContainerHeader,
  ContainerBackButton,
  BackButton,
  TitleScreen,
  ContainerText,
  TextPresentation,
  Button,
  TextButton,
} from './styles';

const LegalizeSituation = ({navigation}) => {
  const UrlForMoreInformation =
    'http://www.justica.gov.br/seus-direitos/migracoes';

  const toURL = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <Container>
      <ContainerHeader>
        <ContainerBackButton onPress={() => navigation.navigate('home')}>
          <BackButton>{translate('toBack')}</BackButton>
        </ContainerBackButton>
        <TitleScreen>{translate('legalizeSituationMenu')}</TitleScreen>
      </ContainerHeader>
      <ContainerText>
        <TextPresentation>
          {translate('legalizeSituationText1')}
        </TextPresentation>

        <Button
          style={styles.shadowContainerStyle}
          onPress={() => toURL(UrlForMoreInformation)}>
          <TextButton>{translate('forMoreInformation')}</TextButton>
        </Button>
      </ContainerText>
    </Container>
  );
};

const styles = StyleSheet.create({
  shadowContainerStyle: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default LegalizeSituation;
