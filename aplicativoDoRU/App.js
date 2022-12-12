import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Extratos from './src/pages/Extratos';
import Informaçoes from './src/pages/Informaçoes';
import Comprar from './src/pages/Comprar';

const Stack = createStackNavigator();

export default function App(){
  return(

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown:false,}}/>
        <Stack.Screen name="Extratos" component={Extratos} />
        <Stack.Screen name="Informaçoes" component={Informaçoes}/>
        <Stack.Screen name="Comprar" component={Comprar}/>
        <Stack.Screen  name="Login" component={Login} options={{
          headerShown:false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


