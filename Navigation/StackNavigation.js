import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation'
import StoryScreen from '../screens/StoryScreen'

const Stack = createStackNavigator();

const StackNavigator = () =>{
  return (
    <Stack.Navigator initialRouteName='Tela Feed' screenOptions={{headerShown: false}} >
      <Stack.Screen name="Tela Feed" component={TabNavigation} />
      <Stack.Screen name="tela de Histórias" component={StoryScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
