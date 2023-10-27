import *as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from '../Navigation/DrawerNavigation';
import *as firebase from 'firebase'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


const Stack = createStackNavigator();

const StackNav = () =>{
  return (
    <Stack.Navigator initialRouteName='Tela Login' screenOptions={{headerShown: false, gestureEnable: false}} >
      <Stack.Screen name="Tela Login" component={LoginScreen} />
      <Stack.Screen name="tela de Registro" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  );
};

