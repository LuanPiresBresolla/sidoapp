import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/home';
import PhraseGuide from './src/screens/phraseGuide';
import WordGuide from './src/screens/wordGuide';
import Onboarding from './src/screens/onboarding';
import ValidateSchooling from './src/screens/validateSchooling';
import LegalizeSituation from './src/screens/legalizeSituation';
import Information from './src/screens/information';
import Numbers from './src/screens/numbers';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="phraseGuide"
          component={PhraseGuide}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="wordGuide"
          component={WordGuide}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="validateSchooling"
          component={ValidateSchooling}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="legalizeSituation"
          component={LegalizeSituation}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="information"
          component={Information}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="numbers"
          component={Numbers}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
