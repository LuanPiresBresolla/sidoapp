import MenuIcons from '../../assets/icons/menu';

/*Criação do menu em array para poder iterar e utilizar componentes*/
const menuFactory = [
  {
    id: 1,
    name: 'phraseGuide',
    text: 'phraseGuideMenu',
    icon: MenuIcons.find(value => value.name === 'phraseGuide').value,
    existScreen: true,
    url: '',
  },
  {
    id: 2,
    name: 'wordGuide',
    text: 'wordGuideMenu',
    icon: MenuIcons.find(value => value.name === 'wordGuide').value,
    existScreen: true,
    url: '',
  },
  {
    id: 3,
    name: 'legalizeSituation',
    text: 'legalizeSituationMenu',
    icon: MenuIcons.find(value => value.name === 'legalizeSituation').value,
    existScreen: true,
    url: '',
  },
  {
    id: 4,
    name: 'validateSchooling',
    text: 'validateStudiesMenu',
    icon: MenuIcons.find(value => value.name === 'validateStudies').value,
    existScreen: true,
    url: '',
  },
  {
    id: 5,
    name: 'brazilMap',
    text: 'brazilMapMenu',
    icon: MenuIcons.find(value => value.name === 'brazilMap').value,
    existScreen: false,
    url: 'https://www.google.com.br/maps',
  },
  {
    id: 6,
    name: 'jobs',
    text: 'jobsMenu',
    icon: MenuIcons.find(value => value.name === 'jobs').value,
    existScreen: false,
    url: 'https://empregabrasil.mte.gov.br/',
  },
  {
    id: 7,
    name: 'numbers',
    text: 'numbersMenu',
    icon: MenuIcons.find(value => value.name === 'money').value,
    existScreen: true,
    url: '',
  },
  {
    id: 8,
    name: 'information',
    text: 'informationMenu',
    icon: MenuIcons.find(value => value.name === 'information').value,
    existScreen: true,
    url: '',
  },
];

export default menuFactory;
