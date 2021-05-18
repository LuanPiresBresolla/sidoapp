import BrazilMap from './brazilMap';
import Information from './information';
import Jobs from './jobs';
import LegalizeSituation from './legalizeSituation';
import Network from './network';
import PhraseGuide from './phraseGuide';
import ValidateStudies from './validateStudies';
import WordGuide from './wordGuide';
import Money from './money';

/*Centralizador dos ícones do menu para facilitar a vida*/
const MenuIcons = [
  {
    name: 'brazilMap',
    value: BrazilMap,
  },
  {
    name: 'information',
    value: Information,
  },
  {
    name: 'jobs',
    value: Jobs,
  },
  {
    name: 'legalizeSituation',
    value: LegalizeSituation,
  },
  {
    name: 'network',
    value: Network,
  },
  {
    name: 'phraseGuide',
    value: PhraseGuide,
  },
  {
    name: 'validateStudies',
    value: ValidateStudies,
  },
  {
    name: 'wordGuide',
    value: WordGuide,
  },
  {
    name: 'money',
    value: Money,
  },
];

export default MenuIcons;
