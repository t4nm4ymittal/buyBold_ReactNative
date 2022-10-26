import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import PhoneNumber from './screens/PhoneNumber';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import VerifyCode from './screens/VerifyCode'
import Map from './screens/Map';
import MainPage from './screens/MainPage';
const Stack = createNativeStackNavigator();

const App = () => {

  return <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Map" component={Map} options={{ title: 'Address' }} />
        <Stack.Screen name="Phone" component={PhoneNumber} />
        <Stack.Screen name="Verify" component={VerifyCode} />
      </Stack.Navigator>
    </NavigationContainer></>
}

export default App;