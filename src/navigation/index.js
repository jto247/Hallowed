import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import Instructions from '../screens/Instructions';
import Profile from '../screens/Profile';
import Recommend from '../screens/Recommend';
import displayShoe from '../screens/shoeDisplay';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Instructions" component={Instructions} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Recommend" component={Recommend} />
        <Stack.Screen name="displayShoe" component={displayShoe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
