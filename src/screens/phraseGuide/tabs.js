import React from 'react';

import {translate} from '../../locales';
import SwapGuide from '../../components/swapGuide';
import {
  SalutationPhrases,
  TransportPhrases,
  LocationPhrases,
  AirportAndBusStationPhrases,
  InHotelPhrases,
} from './phrases';

export const Salutation = () => {
  return (
    <SwapGuide phrases={SalutationPhrases} title={translate('salutation')} />
  );
};

export const Transport = () => {
  return (
    <SwapGuide phrases={TransportPhrases} title={translate('transport')} />
  );
};

export const Location = () => {
  return <SwapGuide phrases={LocationPhrases} title={translate('location')} />;
};

export const AirportAndBusStation = () => {
  return (
    <SwapGuide
      phrases={AirportAndBusStationPhrases}
      title={translate('airportAndBusStation')}
    />
  );
};

export const InHotel = () => {
  return <SwapGuide phrases={InHotelPhrases} title={translate('inHotel')} />;
};
