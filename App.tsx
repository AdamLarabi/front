import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Acceuil from './src/pages/Acceuil';
import InitialisationPage from './src/pages/InitialisationPage ';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Acceuil" component={Acceuil} />
        <Stack.Screen
          name="InitialisationPage "
          component={InitialisationPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
