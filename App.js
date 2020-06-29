import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Lista from './src/Lista';
import Novo from './src/Novo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Novo" component={Novo} options={headerStyle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  headerTintColor: '#fff',
  headerStyle: { backgroundColor: '#0346a1' },
};
