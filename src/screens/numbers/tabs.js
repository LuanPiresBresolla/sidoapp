import React from 'react';

import {
  ContainerCurrency,
  Title,
  ContainerTextCurrency,
  TextCurrency,
} from './styles';
import {translate} from '../../locales';
import SwapNumbers from '../../components/swapNumbers';
import {MonthsTranslated, NumeralsTranslated} from './numbers';

export const Months = () => {
  return (
    <SwapNumbers numbers={NumeralsTranslated} title={translate('numbers')} />
  );
};

export const Numbers = () => {
  return <SwapNumbers numbers={MonthsTranslated} title={translate('months')} />;
};

export const Currency = () => {
  return (
    <ContainerCurrency>
      <Title>{translate('currency')}</Title>
      <ContainerTextCurrency>
        <TextCurrency>Reais - R$</TextCurrency>
        <TextCurrency>Salário Mínimo = 1045,00 Reais</TextCurrency>
        <TextCurrency>Salè Minimòm = 1045,00 Reais</TextCurrency>
      </ContainerTextCurrency>
    </ContainerCurrency>
  );
};
