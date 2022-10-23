import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
   <Stack.Navigator

   screenOptions={{
    headerShown: false,
   }}
   >
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='CreateAccount' component={CreateAccount}/>
   </Stack.Navigator>
  )
}