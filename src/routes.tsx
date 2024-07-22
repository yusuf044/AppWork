import React from 'react';

import {HomeScene, LoginScene} from './screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignupScene from './screen/auth/signup';

export type RootStackParamsList = {
  HomeScene: undefined;
  LoginScene: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScene} />
        <Stack.Screen name="Signup" component={SignupScene} />
        <Stack.Screen name="Home" component={HomeScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
// ------
